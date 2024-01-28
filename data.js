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

const Data = mongoose.model('data', dataSchema)

module.exports = Data