
import mongoose  from 'mongoose'
import Connect from './database/dbconnect.js'
import express from 'express'
import cors from 'cors'
import router from './routes/routes.js'

const app=express()
const port=5080
app.use(cors()) 
app.use(express.json())
app.use(router)


Connect()
.then(()=>{console.log('db connected')})
.catch(()=>{console.log("db failed to connect")})





app.listen(port,()=>{console.log(`app is running at port ${port}`)})
