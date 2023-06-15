const mongoose = require('mongoose')

const { Schema, model } = mongoose

const productSchema = new Schema({
    nameProd : {
        type:String, 
        required: true
    },
    imageProd: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    brand : {
        type:String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0  
    },
    countInStock: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
//index for search
productSchema.index({ nameProd: 'text' });
module.exports = model('product', productSchema)