import mongoose from "mongoose" 
import { Schema } from "mongoose"

const women = new Schema({
    name:{
        type:String
    },
    url:{
        type:String
    },
    price:{
        type:Number,
        default:0
      }
})

const WomenSchema = mongoose.model("women",women)
export default WomenSchema;