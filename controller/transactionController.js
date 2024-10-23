const Transaction = require('../models/Transaction')

const createTransaction = async(req,res)=>{
    try{
        const {type,category,amount,date,description} = req.body
   
    const transaction = new Transaction({
        type,
        category,
        amount,
        date,
        description
    })
    await transaction.save()
    res.status(201).json(transaction)
    }catch(error){
        console.log("there is an error:",error )
        res.status(500).json({message:"server error"})
    }
}

const getTransactions = async(req,res)=>{

    try{
        const transactions = await Transaction.find()
        res.status(200).json(transactions)
    }catch(error){
        console.log('there is an error:', error)
        res.status(500).json({message:"server error"})

    }

}

module.exports = {createTransaction,getTransactions}