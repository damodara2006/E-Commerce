import mongoose from "mongoose";
import { Schema } from "mongoose";

const Men = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
});

const MenSchema = mongoose.model("men", Men);
export default MenSchema;
