const express = require('express');
const { getProducts, addProduct, deleteProduct } = require('../controllers/product')

const app = express()

const router = express.Router();

// Write the code to specify the route of getProduct, addProduct and deleteProduct method

router.post('/', addProduct)
router.get('/', getProducts)
router.delete('/', deleteProduct)

module.exports = router