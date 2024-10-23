const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const transactionRouter = require('./router/transactionRouter')

const app =express()
const PORT = process.env.PORT || 5000
dotEnv.config()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
      console.log('mongoDB connected successfully')
  })
  .catch((error)=>{
    console.log(`${error}`)
  })

app.use('/transactions',transactionRouter)  
app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`)
})