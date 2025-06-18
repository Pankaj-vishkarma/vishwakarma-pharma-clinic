require('dotenv').config()
const express=require('express')
const app=express()
const database=require('./database/db.js')
const router=require('./router/router.js')
const cors=require('cors')
const bodyparser=require('body-parser')
const message_router=require('./router/message.router.js')
const cookieparser=require('cookie-parser')

database()
app.use(cors({
    origin:['https://vishwakarma-pharma-clinic-frontend.onrender.com'],
    methods:['GET','POST'],
    credentials:true
}))
app.use(bodyparser.json())
app.use(cookieparser())
app.use(express.json())
app.use('/',router)
app.use('/message',message_router)

module.exports=app
