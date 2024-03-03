const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./Routes/userRouter')
const userModel = require('./model/userModel')

const PORT = 3006
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/UserDB')


app.post('/',async(req,res)=>{
  try{
    const {email,password} = req.body
    let userdata = await userModel.findOne({email})
    if(userdata){
      if(userdata.password===password){
        res.json({message:'Success',name:userdata.name})
      }
      else{
        res.json('Incorrect password')
      }
    }
    else{
      res.json('Not a registered user')
    }
  }
  catch(error){
    console.log(error.message)
  }
})

app.post('/register',async(req,res)=>{
  try{
    const userDetails = await new userModel({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
  })
  userDetails.save()
  console.log(res.json(userDetails))
}
catch(error){
  console.log(res.json(er))
}
})
app.listen(PORT,()=>{
  console.log('server running on ',PORT)

})
