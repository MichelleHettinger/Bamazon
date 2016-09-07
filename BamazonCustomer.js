// 5. Then create a Node application called `BamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

// 6. The app should then prompt users with two messages. 
// 	* The first should ask them the ID of the product they would like to buy. 
// 	* The second message should ask how many units of the product they would like to buy.

// 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. 
// 	* If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store *does* have enough of the product, you should fulfill the customer's order. 
// 	* This means updating the SQL database to reflect the remaining quantity.
// 	* Once the update goes through, show the customer the total cost of their purchase.

var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "s0nyd0g", //Your password
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
});

connection.query('SELECT * FROM products', function(err, res) {
    if (err) throw err;
    console.log("Item # | Product        | Department| Price | Quantity ");

    //Loop through all the rows and print out their column values
    for (var i=0; i<res.length; i++){
    	if (i<9){
    		console.log(" " + res[i].Item_ID + "|" + res[i].Product_Name + " -- " + res[i].Department_Name + "--" + res[i].Price + "--" + res[i].Stock_Quantity);
    	}
    	else if (i >= 9){
    		console.log(res[i].Item_ID + "|" + res[i].Product_Name + " -- " + res[i].Department_Name + "--" + res[i].Price + "--" + res[i].Stock_Quantity);
    	}
    }

    promptUser();
});

var promptUser = function(){
	inquirer.prompt([{
		name: "Item_ID",
		message: "Enter the ID of the item you wish to purchase.",
		validate: function(value){
            if (isNaN(value) == false) {
                return true;
            }
            else {
            	return false;
            }
		}
	},{
        name: "userQuantity",
        message: "How many would you like to buy?",
        validate: function(value){
            if (isNaN(value) == false) {
                return true;
            }
            else {
                return false;
            }
        }        
    }]).then(function(answers){
    		var currentItem = answers.Item_ID;
    		var currentAmount = answers.userQuantity;

            //Read from database. If they requested too much, don't perform the transaction.
            //Otherwise fulfuill the request.
            connection.query('SELECT * FROM products WHERE ?',{
                Item_ID: answers.Item_ID
            },function(err, res){
                if (currentAmount > res[0].Stock_Quantity){
                    console.log("You cannot buy that many!");
                    promptUser();
                }
                else { 
                    console.log("You can buy it!");

                    var newQuantity = (res[0].Stock_Quantity - currentAmount);
                    var totalCost = res[0].Price*currentAmount;

                    connection.query('UPDATE products SET ? WHERE ?',[{
                        Stock_Quantity: newQuantity
                    },{
                        Item_ID: currentItem
                    }], function(err, res){
                        console.log("You were charged $" + totalCost);
                    });
                }
            })
	   })
}   