var mysql = require("mysql");
var prompt = require("prompt");
var connect = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "**********************",
    database: "bamazon",
    insecureAuth: true
});

connect.connect(function(error) {
    if(error) throw error;
    
    connect.query("SELECT item_id, product_name, department_name, price FROM product", function(error, result, fields){
    if(error) throw error;
    console.log(result);
    afterConnection();
    });
});

function afterConnection(){

    prompt.start();
    console.log("Please enter the item you would like to buy: ");
    prompt.get(["productID", "NumberofUnits"], function(error, result){
        connect.query("SELECT * FROM product where item_id = ?", [result.productID], function(error, results, fields){
            if(error) throw error;
            // use `  when using .foreach. research more
                results.forEach((product) => {
                    if(result.NumberofUnits > product.stock_quantity){
                        console.log("Insufficient amount entered");
                        connect.end();
                    }else{
                            console.log(`The item you've selected is ${product.product_name}`);
                            var updateQ = product.stock_quantity - result.NumberofUnits;
                            connect.query("UPDATE product SET stock_quantity = ? WHERE item_id = ?", [updateQ, result.productID], function(error, results){
                                if(error) throw error;

                            var totalCost = result.NumberofUnits * product.price
                            console.log(product.price);
                            console.log("Your total cost is: ", totalCost);
                            console.log(`The quantity in the MySQL database for ${product.product_name} is: ` + updateQ);
                            connect.end();
                            })

                        //subtract from MySQL here normal algebra




                        }
                });
            });
            });
        };


