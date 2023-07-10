import mongoose from "mongoose";
const Schema = mongoose.Schema({
    uploadig:{
        type:String,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    langitude:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }

    })

const Mapmodel=mongoose.model("mapmodel",Schema)
export default Mapmodel