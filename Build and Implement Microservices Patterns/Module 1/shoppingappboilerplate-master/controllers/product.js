const User = require('../model/user')
const Product = require('../model/product')
const { response } = require('express')

const getProducts = async (req, res) => {

    // Write the code to get the product details

    Product.find({}, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })

}

const addProduct = async (req, res) => {

    // Write the code to add the product details
    try {
        const { productId, productName, productDisc, inStock } = req.body;

        if (!(productId && productName && productDisc && inStock)) {
            return res.status(400).send("All input are required")
        }

        const existingProduct = await Product.findOne({ productId })

        if (existingProduct) {
            return res.status(409).send("Product Already exists !!")
        }

        const product = await Product.create({
            productId: productId,
            productName: productName,
            productDisc: productDisc,
            inStock: inStock
        });

        // return res.status(200).json({
        //     message: "Ok",
        //     product: product
        // });

        return res.status(200).send("OK")



    } catch (err) {
        res.status(500).send('Internal server error')
    }
}

const deleteProduct = async (req, res) => {

    // Write the code to delete the product details

}

module.exports = { getProducts, addProduct, deleteProduct };