const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const  User  = require('./models/User');

const authRoutes = require('./routes/user')
app.use(authRoutes)


app.get('/', (req,res) => {
    res.send('welcome to home page')
})





mongoose.connect(process.env.MONGO_URL, 
    err =>  {
        if(err) throw err
        console.log('database connected')
        
     });

port = 7000
app.listen(port, (req,res) => {
    console.log(`server run in ${port}`)
})