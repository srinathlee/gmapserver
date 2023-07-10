import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose"

const dbConnection={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

async function Connect(){
    mongoose.connect(process.env.dbUri,dbConnection)
}
export default Connect