//const twilio=require('twilio')
const nodemailer=require('nodemailer')
/*const accountSid=process.env.TWILIO_ACCOUNT_SID
const authToken=process.env.TWILIO_ACCOUNT_AUTH_TOKEN
const client=twilio(accountSid,authToken)*/

const sendMessages=async(req,res)=>{

  const {name,dateofbirth,whatsappnumber,email,dateofvisit}=req.body
  
  if(!name || !dateofbirth || !whatsappnumber ||!email || !dateofvisit){
    return res.status(200).json({
      success:false,
      message:"All fields are required"
    })
  }
    const userDetail=`Patient Name - ${name} ,Date Of Birth - ${dateofbirth} ,Mobile - ${whatsappnumber} ,Date of Visiting - ${dateofbirth}`;

  try{
    const transporter=nodemailer.createTransport({
      host:'smtp.gmail.com',
      service:'email',
      port:587,
      secure:false,
      auth:{
        user:process.env.EMAIL_ID,
        pass:process.env.EMAIL_PASSWORD
      }
   })
   
   transporter.sendMail({
    from:process.env.EMAIL_ID,
    to:'pankaj20jnp@gmail.com',
    subject:'Booking Appointment',
    text:userDetail
   },(error,response)=>{
    if(error){
      return res.status(200).json({
        success:false,
        message:error
      })
    }else{
      return res.status(200).json({
        success:true,
        message:'succesfully booked your appointment'
      })
    }
   })
  }catch(e){
    return res.status(400).json({
        success:false,
        message:e.message
    })
  }

}

const sendUser=async(req,res)=>{

  const {name,dateofbirth,whatsappnumber,email,dateofvisit}=req.body
  
  if(!name || !dateofbirth || !whatsappnumber || !email || !dateofvisit){
    return res.status(200).json({
      success:false,
      message:"All fields are required"
    })
  }

  
  const location="https://www.google.com/maps/place/Vishwakarma+Pharma+Clinic/@25.8343062,82.7384441,17z/data=!3m1!4b1!4m6!3m5!1s0x399037c0591e02f3:0xf8f4f49e43e2379e!8m2!3d25.8343062!4d82.7384441!16s%2Fg%2F11spxgfbq0?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D"

    const userDetail=`Mr/Mrs ${name}  You have an Appointment on ${dateofvisit} ,your Rigistration number is ${whatsappnumber} Please visit our Clinic,Location - ${location}`

  try{
      const transporter=nodemailer.createTransport({
          host:'smtp.gmail.com',
          service:'email',
          port:587,
          secure:false,
          auth:{
            user:process.env.EMAIL_ID,
            pass:process.env.EMAIL_PASSWORD
          }
       })
       console.log(email)
       transporter.sendMail({
        from:process.env.EMAIL_ID,
        to:email,
        subject:'Appointment',
        text:userDetail
       },(error,response)=>{
        if(error){
          return res.status(200).json({
            success:false,
            message:error
          })
        }else{
          return res.status(200).json({
            success:true,
            message:'succesfully send request'
          })
        }
       })
  }catch(e){
    return res.status(400).json({
        success:false,
        message:e.message
    })
  }

}

const GetConsultation=(req,res)=>{

   const {name,mobile,message}=req.body


   if(!name || !mobile || !message){
    return res.status(200).json({
      success:false,
      message:'All fields are required'
    })
   }

   const context=`A request from ${name} for consultation contact number is ${mobile} and some other information about ${name} is "${message}"`

   try{
       const transporter=nodemailer.createTransport({
          host:'smtp.gmail.com',
          service:'email',
          port:587,
          secure:false,
          auth:{
            user:process.env.EMAIL_ID,
            pass:process.env.EMAIL_PASSWORD
          }
       })

       transporter.sendMail({
        from:process.env.EMAIL_ID,
        to:'pankaj20jnp@gmail.com',
        subject:'CONSULTAIION',
        text:context
       },(error,response)=>{
        if(error){
          return res.status(200).json({
            success:false,
            message:error
          })
        }else{
          return res.status(200).json({
            success:true,
            message:'succesfully send request'
          })
        }
       })

   }catch(e){
    return res.status(400).json({
      success:false,
      message:e.message
    })
   }

}

module.exports={sendMessages,GetConsultation,sendUser}