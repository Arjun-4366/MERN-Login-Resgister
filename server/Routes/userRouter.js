const express = require("express");
const userRouter = express();
const userController = require('../controller/userController')



userRouter.use(express.json())
userRouter.use(express.urlencoded({extended:true}))

userRouter.post('/register',userController.handleRegister)


module.exports = userRouter