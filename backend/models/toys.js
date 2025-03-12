import mongoose from "mongoose";
import { Schema } from "mongoose";

const Toys = new Schema({
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

const ToysSchema = mongoose.model("Toys", Toys);
export default ToysSchema;
