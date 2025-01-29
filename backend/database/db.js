const mongoose=require('mongoose')
const MONGO_URL=process.env.MONGO_URL

const database=()=>{
    mongoose
    .connect(MONGO_URL)
    .then((conn)=>{
        console.log(`database is connected to ${conn.connection.host}`)
    })
    .catch((E)=>{
        console.log(E.message)
    })
}

module.exports=database