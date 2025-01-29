const mongoose=require('mongoose')
const {Schema}=mongoose
const bcrypt=require('bcrypt')
const JWT=require('jsonwebtoken')


const userSchema=new Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
},{timestamps:true})

userSchema.pre('save',async function(next){
    if(!this.isModified('password'))
        return next()
    this.password=await bcrypt.hash(this.password,10)
        return next()
})

userSchema.methods={
    jwtToken(){
        return JWT.sign(
            {id:this._id,email:this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}

module.exports=mongoose.model('user',userSchema)

