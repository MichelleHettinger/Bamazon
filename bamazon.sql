DROP DATABASE `bamazon`;

create database bamazon;

use bamazon;

CREATE TABLE `products` (
  `Item_ID` int(11) AUTO_INCREMENT NOT NULL,
  `Product_Name` varchar(45) NOT NULL,
  `Department_Name` varchar(45) NOT NULL,
  `Price` decimal(5,2) NOT NULL,
  `Stock_Quantity` int(3) NOT NULL,
  PRIMARY KEY (`Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('1', 'Fish Oil', 'Supplements', '9.99', '50');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('2', 'Vitamin D3', 'Supplements', '12.99', '50');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('3', 'Soccer Ball', 'Sports', '14.99', '15');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('4', 'Office Chair', 'Office Supplies', '199.99', '5');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('5', 'Scissors', 'Office Supplies', '4.99', '10');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('6', 'Blueberry Muffin', 'Bakery', '3.99', '3');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('7', 'Cheesecake', 'Bakery', '11.99', '20');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('8', 'Pillow', 'Linen', '8.99', '7');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('9', 'Bed Sheets', 'Linen', '19.99', '13');
INSERT INTO `bamazon`.`products` (`Item_ID`, `Product_Name`, `Department_Name`, `Price`, `Stock_Quantity`) VALUES ('10', 'Wireless Mouse', 'Computers', '9.99', '23');


select * from products;