const express=require('express')
const messageRouter=express.Router()

const { sendMessages, GetConsultation, sendUser }=require('../controller/messageCntr.js')
const Auth = require('../middleware/Auth.js')

messageRouter.post('/sendmessage',Auth,sendMessages)
messageRouter.post('/senduser',sendUser)
messageRouter.post('/getconsultation',Auth,GetConsultation)

module.exports=messageRouter
