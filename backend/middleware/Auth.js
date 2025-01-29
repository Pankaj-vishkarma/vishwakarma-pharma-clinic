const JWT=require('jsonwebtoken')
const Auth=(req,res,next)=>{
    const token=(req.cookies && req.cookies.token) ||null
    try{
        if(!token){
            return res.status(200).json({
                success:false,
                message:'Not Authorised,please login!'
            })
        }
        const payload=JWT.verify(token,process.env.SECRET)
        req.user={id:payload.id,email:payload.email}
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    next()
}

module.exports=Auth