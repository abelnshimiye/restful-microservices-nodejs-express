const Product = require("../dao/product.dao.js");

// create and save a new Product
exports.create = (req, res) => {
    // validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    //  create a Product
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    // save Product in the database
    Product.create(product, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the product"
            });
        } else {
            res.send(data);
        }
    });
}



//  Retrieve all Products from the database (with condition).
exports.findAll = (req, res) => {
    const name = req.query.name;

    Product.getAll(name, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error ocurred while retrieving products."
            })
        } else {
            res.send(data);
        }
    });
};

// Find a single Products by Id
exports.findOne = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id  ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Product with id " + req.params.id

                })
            }
        } else {
            res.send(data);
        }
    })
}

// find all costly Products 
exports.findAllCostlyProducts = (req, res) => {
    const price = req.query.price;

    Product.getCostlyProducts(price, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error occured while retrieving products"
            })
        } else {
            res.send(data);
        }
    })
}


// Update a Product identified by the id in the rtequerst
exports.update = (req, res) => {
    //  validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty !"
        });
    }

    console.log(req.body);
    Product.updateById(
        req.params.id,
        new Product(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Product with id ${req.params.id}`
                    });
                } else {
                    res.status(500).send({
                        message: "error updating Product with id" + req.params.id
                    })
                }
            } else {
                res.send(data);
            }
        });
};

//  Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Product with id " + req.params.id
                });
            }
        } else {
            res.send({ message: `Product was deleted successfully` });
        }
    });
};

// delete all Product from the database
exports.deleteAll = (req, res) => {
    Product.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while removing all Products."
            });

        } else {
            res.send({ message: "All Products were deleted successfully!" })
        }
    })
}
