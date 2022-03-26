const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
    name : {
        type : String
    },

    email : {
        type : String
    },

    password : {
        type : String
    },
    Type_Cheked: {
        type: String, 
        possibleValues: ['Male','Female']
    }
     
},
{
    timestamps : true
}) 

module.exports = mongoose.model('User', userSchema)