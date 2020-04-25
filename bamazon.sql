CREATE TABLE product(
 item_id int,
 product_name VARCHAR(75),
 department_name VARCHAR(20),
 price DEC(6,2),
 stock_quantity int
);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES 
(1, "toilet paper", "toiletries", 22.02, 200),
(2,"3M N95 mask", "miscellaneous", 10.99, 100),
(3, "Bleach, 1gal", "home & kitchen", 25.00, 50),
(4, "Trash bags, 90ct", "toiletries", 12.98, 40),
(5, "Bread flour, 10lb ", "pantry", 8.99, 35),
(6, "Active Dry Yeast, 4oz", "pantry", 4.50, 32),
(7, "Sugar, 4lb", "pantry", 2.50, 50),
(8, "Table salt, 26oz", "pantry", 4.00, 35),
(9, "Razer gaming laptop", "electronics", 899.99, 50),
(10, "Nintendo Switch", "electronics", 299.99, 15);
SELECT * FROM product;