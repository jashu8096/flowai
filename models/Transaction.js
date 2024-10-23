const mongoose  = require('mongoose')
const transactionScema = new mongoose.Schema({
    type : {
        type:String,
        required: true
    },

    category: {
        type: String,
        required:true
    },
    amount : {
        type:Number,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    description : {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Transaction',transactionScema)