const userModel = require('../model/userModel') 



const handleRegister = async(req,res)=>{
    try{
        const userDetails = await new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        userDetails.save()
        console.log(userDetails)
    }
    catch(erorr){
        console.log(erorr)
    }
}

    module.exports = {handleRegister}