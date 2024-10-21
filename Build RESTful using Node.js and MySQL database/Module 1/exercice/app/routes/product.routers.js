module.exports = app => {
    const product = require("../controllers/product.controller.js");

    var router = require("express").Router();

    // create a new Product
    router.post("/", product.create);

    // Retrieve all Product 
    router.get("/", product.findAll);

    //  Retrieve all costly products
    router.get("/price/", product.findAllCostlyProducts);


    // Retrieve a single Product with id
    router.get("/:id", product.findOne);

    // update a Product with id
    router.put("/:id", product.update);


    // Delete a Product with id
    router.delete("/:id", product.delete);

    // Delete all Products
    router.delete("/", product.deleteAll)

    app.use('/api/product', router);
}