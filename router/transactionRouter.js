const express = require('express')
const router = express.Router()

const transactionController = require('../controller/transactionController')

const Transaction = require('../models/Transaction')

router.post('/add-transaction',transactionController.createTransaction)
router.get('all-transaction',transactionController.getTransactions)

module.exports = router