// require(dotenv).config()
import mongoose from "mongoose"

const dbConnection={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

async function Connect(){
    mongoose.connect(dbUri,dbConnection)
}
