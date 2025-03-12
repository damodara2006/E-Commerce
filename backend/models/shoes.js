import mongoose from "mongoose";
import { Schema } from "mongoose";

const Shoes = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  },
  price:{
    type:Number,
    default:0
  }
});

const ShoesSchema = mongoose.model("Shoes", Shoes);
export default ShoesSchema;
