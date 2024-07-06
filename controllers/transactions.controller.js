const express = require('express')
const transactionsController = express.Router()
const transactionModel = require('../models/transaction.model')

// index
transactionsController.get('/', (req, res) => {
  res.status(200).send(transactionModel)
})

module.exports = transactionsController