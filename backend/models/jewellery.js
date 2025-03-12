import mongoose from "mongoose";
import { Schema } from "mongoose";

const Jewellery = new Schema({
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

const JewellerySchema = mongoose.model("Jewellery", Jewellery);
export default JewellerySchema;
