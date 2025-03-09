import mongoose from "mongoose";
import { Schema } from "mongoose";

const Men = new Schema({
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

const MenSchema = mongoose.model("men", Men);
export default MenSchema;
