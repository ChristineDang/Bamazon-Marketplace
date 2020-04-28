# Bamazon-Marketplace

ABOUT:
* The Bamazon Marketplace is a CLI app that allows customers to purchase in-stock items and allows managers to take care of inventory and add new products that are all located on a MySQL database.

APP OVERVIEW:
* The app is organized into 2 js files:
1. bamazonCustomer.js, which shows the list of products sold within the store and allows customers to make purchases. It contains a connection to the MySQL database, a prompt.get to retrieve the data, basic arithmetic to calculate the customer's total cost, and variable to update the database stock quantity after each purchase has been made.

2. bamazonManazger.js, which allows managers to view their products, view low inventories, restock, and add new products. It contains a connection to the MySQL database, a switch case within a function, and an inquirer prompt to list the options.

HOW TO USE bamazonCustomer.js:
1. Open the Terminal or Command Prompt on your computer, and go to the "Bamazon-Marketplace" file folder.

2. Once in the correct folder, type "node bamazonCustomer.js" and a list containing 10 products with their item id, name, department name, and price will pop up.

3. At the very end of the list, enter in the item id of the product you would like to buy.

4. A follow-up question will appear asking how many items of that one item you would like to buy.

5. At the very end, the app will display the name of the item you have selected, the cost, and total cost. It will also display the quantity left in the MySQL database (as a check to make sure the database was updated).

HOW TO USE bamazonManager.js

1. Open the Terminal or Command Prompt on your computer, and go to the "Bamazon-Marketplace" file folder.

2. Once in the correct folder, type "node bamazonManager.js" and a list containing 10 products with their item id, name, department name, and price will pop up.



SCREENSHOTS:

1. bamazonCustomer.js products list
![Screen Shot 2020-04-27 at 8 14 03 PM](https://user-images.githubusercontent.com/59538550/80433139-21c8d980-88c4-11ea-99fe-23275572f877.png)

2. bamazonCustomer.js purchasing product
![Screen Shot 2020-04-27 at 8 14 37 PM](https://user-images.githubusercontent.com/59538550/80433182-3d33e480-88c4-11ea-9fb2-198db977a772.png)

3. bamazonCustomer.js MySQL Inventory Update                                                                                  
![Screen Shot 2020-04-27 at 8 15 08 PM](https://user-images.githubusercontent.com/59538550/80433215-4f158780-88c4-11ea-849d-20ea9a402920.png)

![Screen Shot 2020-04-27 at 8 15 42 PM](https://user-images.githubusercontent.com/59538550/80433219-50df4b00-88c4-11ea-976f-1a2966d28597.png)

4. bamazonManager.js terminal start screen (questions)
![Screen Shot 2020-04-27 at 8 19 47 PM](https://user-images.githubusercontent.com/59538550/80433275-753b2780-88c4-11ea-9dc9-49b2e48a5eda.png)

5. bamazonManager.js View Products for Sale
![Screen Shot 2020-04-27 at 8 20 42 PM](https://user-images.githubusercontent.com/59538550/80433350-a3206c00-88c4-11ea-94b6-90e4f9b45e6c.png)

6. bamazonManager.js View Low Inventory
![Screen Shot 2020-04-27 at 8 21 03 PM](https://user-images.githubusercontent.com/59538550/80433355-a74c8980-88c4-11ea-870c-24a3c5190c41.png)

7. bamazonManager.js Add to Inventory
    (Function currently under construction)

8. bamazonManager.js Add New Product
    (Function currently under construction)


DEPLOYED LINK:

https://christinedang.github.io/Bamazon-Marketplace/

TECHNOLOGIES USED:
* Inquirer@7.1.0 or a higher version
    (If you would like to try this app on your computer, you must supply your own .env file for it to work)
* Prompt-list
* package.json
* node_modules
* MySQL


DEVELOPER:
* Christine Dang, full app developer
