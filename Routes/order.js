const express = require('express');

const Router = express.Router();

const Order = require('../models/order')

const isAuth = require("../middlewares/isAuth")

const {createOrder, listOrders, getOrder, updateOrder, deleteOrder} = require("../controllers/orderCtrl");


//Get orders of users - admin
Router.get('/orderlist', isAuth, listOrders);

//Get orders by id-client - user history
Router.get('/history', isAuth, async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    if(orders) return res.status(200).send({response:orders, msg: "Getting Your orders with success"});
    else return res.status(400).send({msg: "No orders !!"})
  })

Router.post('/', isAuth, createOrder)

//Get order details by orderId -user/admin
Router.get('/:id', isAuth, getOrder);

Router.put('/:id/pay', isAuth, updateOrder);

Router.delete('/:id', isAuth, deleteOrder);


module.exports = Router;