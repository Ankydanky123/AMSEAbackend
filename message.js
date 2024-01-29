const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({

    name:{
        type:String
    },
    child_name:{
        type:String
    },
    email:{
        type:String
    },
    telephone:{
        type:Number
    },
    message:{
        type:String
    }
})

const Message = mongoose.model('message', dataSchema)

module.exports = Message