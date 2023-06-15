const Order = require('../models/order');

require('dotenv').config('../config/.env');



//create order
const createOrder = async(req, res) => {
   try {
   if(req.body.orderItems.length === 0){
       res.status(400).send({msg: "No order items, cart is empty"})
   } 
   const newOrder = new Order({
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemsPrice: req.body.itemsPrice,
    shippingPrice: req.body.shippingPrice,
    taxPrice: req.body.taxPrice,
    totalPrice: req.body.totalPrice,
    fullName: req.body.fullName,
    phone: req.body.phone,
    user: req.user._id,
    })

    const response = await newOrder.save()
    res.status(200).send({response: response, msg: "Order saved"})
    
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Can not save order!"})
    }
}

//Get all orders - admin
const listOrders = async(req, res) => {
    try {
        const orders = await Order.find({})
        if(orders){
            return res.status(200).send({response: orders, msg: "Getting orders with success"})
        }
        return res.status(400).send({msg: "No orders in Database!!"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Can not getting orders!!"})
    }
}

//Get order details by orderId -user/admin
const getOrder = async(req, res) => {
    try {
      
        let findOrder = await Order.findOne({_id:req.params.id})
           
        if(findOrder){
            return res.status(200).send({response: findOrder, msg: "Getting order with success"})
        }
         return res.status(400).send({msg: "This order is not Exist!!"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Can not get this order!!"})
    }
}


//delete order
const deleteOrder = async(req, res) => {
    try {
        let result = await Order.findByIdAndDelete({_id: req.params.id})
        if(result){
            return res.status(200).send({msg: "Order deleted", response: result})
        }
        return res.status(400).send({msg: "This order is not exist"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Can not delet this order!"})
    }
}

//Update order
// const updateOrder = async (req, res) => {
//     try{
//        let updatedOrder = await Order.findByIdAndUpdate({_id: req.params.id},{$set: {...req.body}})
//         res.send({ msg: 'Order updated', response: updatedOrder });  
     
//     } catch(error) {
//       res.status(404).send({ msg: 'Can Not update this order!!' });
//     }
// }


//after delivering, client paid cash
const updateOrder = async(req, res) => {
    try {
        const order = await Order.findOne({_id:req.params.id});
  
    if (!order){
        res.status(400).send({msg: "No orders "})
    }  
    order.isPaid = true;
    order.paidAt = Date.now();
    order.isDelivered = true;
    order.deliveredAt = Date.now();
  
    const updatedOrder = await order.save();
    res.status(200).send({ msg: "Order delivered and paid cash", response: updatedOrder });
    } catch (error) {
        res.status(400).send({msg: "Can not paid order"})
    }  
}


module.exports = {
    createOrder,
    listOrders,
    getOrder,
    updateOrder,
    deleteOrder,
  
}