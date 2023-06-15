const express = require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config('./config/.env')
const cors = require('cors')
const path = require('path')
const authRouter = require('./Routes/Auth')
const userRouter = require('./Routes/user')
const productRouter = require('./Routes/product')
const orderRouter = require('./Routes/order')
const filterRouter = require('./Routes/filter')


const app = express()
const port = process.env.PORT || 6000 

connectDB()

app.use(cors())

//middleware
app.use(express.json())


//use routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/order', orderRouter)
app.use('/api/filter', filterRouter);


//deploy
//if(process.env.NODE_ENV === "production") {
    //set static folder
    //All the js and css files will be read and served from this folder
    app.use(express.static(path.join(__dirname, "./frontend/build")))

    //index.html for all page routes
    app.get('*', (req, res) =>{
        res.sendFile(
            path.join(__dirname, "./frontend/build/index.html"),
            function(err){
                res.status(500).send(err)
            }
            )
    })
//}

app.listen(port, async (err) => {
    await connectDB()
    err?
    console.error(err)
    :
    console.log(`Server is running on port ${port}`)
})