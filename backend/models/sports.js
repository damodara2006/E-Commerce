import mongoose from "mongoose";
import { Schema } from "mongoose";

const Sports = new Schema({
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

const SportsSchema = mongoose.model("Sports", Sports);
export default SportsSchema;
