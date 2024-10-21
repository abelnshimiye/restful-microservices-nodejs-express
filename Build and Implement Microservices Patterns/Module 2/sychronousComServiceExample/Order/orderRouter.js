const express = require('express');

const router = express.Router()

const mongoose = require('mongoose');

const axios = require('axios');

require('../dbConfig/dbfile')

const order = require('./orderModel')

router.post('/', async (req, res) => {
    try {

        const newOrder = new order({
            customerId: mongoose.Types.ObjectId(req.body.customerId),
            productId: mongoose.Types.ObjectId(req.body.productId),
        });

        const data = await newOrder.save();

        if (data)
            res.status(200).send('Success')


    } catch (err) {
        console.log('error', err)
    }
})


router.get('/:id', (req, res) => {
    order.findById(req.params.id).then((order) => {

        if (order) {
            axios.get(`http://localhost:4000/customer/${order.customerId}`).then((response) => {
                let orderObject = {
                    CustomerName: response.data.CustomerName,
                }

                axios.get(`http://localhost:3000/product/${order.productId}`).then((response) => {
                    orderObject.ProductName = response.data.ProductName
                    orderObject.ProductDetails = response.data.ProductDetails
                    console.log(":In order ", orderObject);

                    res.json(orderObject);
                })
            })
        } else {
            res.status(404).send('Orders not found');
        }

    }).catch((err) => {
        res.status(500).send('Internal Server Error !', err);
    });
})

module.exports = router
