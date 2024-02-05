// require express first 
const express = require('express')
const mongoose = require('mongoose')
const CORS = require('cors')
const env = require('dotenv')
env.config({})
// create app throught it 
const app=express()

app.use(express.json({}))

// use cors to enable cross origin requests
app.use(CORS({
  origin:"*"
}))

// connection to db 
mongoose.connect('mongodb+srv://Ankush:issoburrito123@cluster0.19pcgij.mongodb.net/Clustor0?retryWrites=true&w=majority')
.then(data=>{
  console.log("db connected success")
})
.catch(err=>{
  console.log("error while connecting ", err)
})

const Message = require('./message')
app.get('/',(req,res)=>{
  res.send('App is working 😀')
})

// lets create a route for storing message into db from frontend
// "/send-message"

app.post('/send-message' , (req,res)=>{

  // when someone makes request on this url this will handle it as follows 
  // 1. get req data from req.body 
  // 2. insert query to add data to database 
  // 3. send response back to frontend with success 
  // 4 if any error occurs then also inform frontend error message .
  // url for mongo db mongodb+srv: //Ankush:<password>@cluster0.19pcgij.mongodb.net/?retryWrites=true&w=majority
    // console.log(req.body)
    const data = req.body

    Message.create(data)
    .then(response=>{
      console.log("inserted success")
      res.status(200).send(
        {
          detail:"Added successfully",
          data: response
        }
      )
    })
    .catch(err=>{
      console.log("error inserting data", err.message)

      res.status(400).send({
        detail:"Error while sending data",
        data:err
      })
    })
    

})


// create app listener using app.listen ()-- this will be listening to all service requests
app.listen(process.env.PORT || 8080,()=>{

    console.log("Server Started at http://localhost:8080")


})


