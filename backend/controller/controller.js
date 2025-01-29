const userSchema=require('../schema/userSchema.js')
const emailvalidator=require('email-validator')
const bcrypt=require('bcrypt')

const signup=async(req,res)=>{
  const {name,email,password,confirmpassword}=req.body
  //console.log(req.body)

  if(!name || !email || !password || !confirmpassword){
    return res.status(200).json({
        success:false,
        message:'All fields are required'
    })
  }

  if(password !== confirmpassword){
    return res.status(200).json({
        success:false,
        message:'password and confirm password are not match'
    })
  }
  
  const validEmail=emailvalidator.validate(email)
  if(!validEmail){
    return res.status(200).json({
        success:false,
        message:'please provide a valid email'
    })
  }

  const exitsEmail=await userSchema.findOne({email})

  if(exitsEmail){
    return res.status(200).json({
      success:false,
      message:'Account already exits'
    })
  }

  try{
      const userInfo=userSchema(req.body)
      const result= await userInfo.save()

      return res.status(200).json({
        success:true,
        data:result,
        message:'succesfully Login'
      })
  }catch(e){
    return res.status(400).json({
        success:false,
        message:e.message
    })
  }

}

const signin=async(req,res)=>{
  const {email,password}=req.body

  if(!email || !password){
    return res.status(200).json({
        success:false,
        message:"email and password are required"
    })
  }

  try{
       const user=await userSchema.findOne({email}).select('+password')

       if(!user || !(await bcrypt.compare(password,user.password))){
        return res.status(200).json({
            success:false,
            message:'invalied credentials'
        })
       }

       const token=user.jwtToken()

       const cookiOption={
        maxAge:24*60*60,
        httpOnly:true
       }

       res.cookie('token',token,cookiOption)
       return res.status(200).json({
        success:true,
        message:'successfully login',
        token
       })

  }catch(e){
    return res.status(400).json({
        success:false,
        message:e.message
    })
  }
}

module.exports={signup,signin}