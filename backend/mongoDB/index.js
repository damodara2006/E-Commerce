import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({
    path:".env"
})

const MONGODB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.Mongodb)
        console.log("Conneted DB")
    }
    catch(err){
        console.log(err)
    }
}

export default MONGODB