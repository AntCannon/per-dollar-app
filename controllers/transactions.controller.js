const express = require('express')
const transactionsController = express.Router()
const transactionModel = require('../models/transaction.model')

// index
transactionsController.get('/', (req, res) => {
  res.status(200).send(transactionModel)
})

// show
transactionsController.get('/:id', (req, res) => {
  const id = +req.params.id
  const transaction = transactionModel.find(transaction => transaction.id === id)
  if (transaction > -1) {
    res.status(200).send(transaction)
  } else {
      res.status(400).json({"error": `No transaction with id: ${id}`})
  }
})

module.exports = transactionsController