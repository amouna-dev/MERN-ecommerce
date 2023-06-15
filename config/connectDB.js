const mongoose = require('mongoose')
require('dotenv').config({path:'./config/.env'})

const DB_URI = process.env.DB_URI

const connectDB = async() => {
    try {
        await mongoose.connect(DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true })
            console.log("Connection to DB with success")
    } catch (error) {
      console.log( `cannot connect to database ${error}`)  
    }
}

module.exports = connectDB