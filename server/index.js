const express = require('express')
const mongoose  = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()




// app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())



app.use('/', require('./routes/user'))

/// port env



app.get('/' , (req,res) => {
    res.send('hhhhh')
})


////// connect database
mongoose.connect(process.env.MONGO_URL,
    
    err => {
        if(err) throw err
        console.log('database connected')
    })


    //// import port
app.listen(8080, () => {
    console.log(`server run in 8080`)
})