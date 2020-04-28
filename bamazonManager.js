var mysql = require("mysql");
var prompt = require("prompt");
var inquirer = require("inquirer");
var connect = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "**********************",
    database: "bamazon",
    insecureAuth: true
});

function options(parameter){
    switch(parameter){
        case "View Products for Sale":
            // connect.connect(function(error) {
            //     if(error) throw error;
                connect.query("SELECT item_id, product_name, department_name, price FROM product", function(error, result, fields){
                if(error) throw error;
                console.log(result);
                });
                break;
            // });
        case "View Low Inventory":
            // connect.connect(function(error){
            //     if(error) throw error;
                connect.query("SELECT * FROM product WHERE stock_quantity < 5", function(error, result, fields){
                if(error) throw error;
                if (result == 0){
                    console.log("Nothing is Low in Stock")
                }else{
                console.log(result);
                }
                })
                break;
            // })


        // case "Add to Inventory":
        //     var list = require("prompt-list");
        //     var list = new list({
        //         name: 'restock',
        //         message: 'Which product would you like to restock?',
        //         choices: ["toilet paper", "3M N95 mask", "Bleach, 1gal", "Trash Bags, 90ct", "Bread flour, 10lb", "Active Dry Yeast, 4oz", "Sugar, 4lb", "Table salt, 26oz", "Razor gaming laptop", "Nintendo Switch"]
                
        //     })

            // connect.connect(function(error){
            //     if(error) throw error;
            //     connect.query("SELECT stock_quantity FROM product", function(error, result, fields){
            //         if(error) throw error;
            //         var updateQ = product.stock_quantity + result.NumberofUnits;
            //         console.log(`The quantity in the MySQL database for ${product.product_name} is: ` + updateQ);
            //         connect.end();
            //         })
            
            }
};

var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type: "list",
        name: "Manager",
        message: "What would you like to do today?",
        choices: ['View Products for Sale', "View Low Inventory", "Add to Inventory", "Add New Product"],
    }
  ])
  .then(answers => {
    options(answers.Manager);
    console.log("Answer:", answers.Manager);
    console.log(answers);
    
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });