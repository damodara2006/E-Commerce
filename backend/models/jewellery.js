import mongoose from "mongoose";
import { Schema } from "mongoose";

const Jewellery = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
});

const JewellerySchema = mongoose.model("Jewellery", Jewellery);
export default JewellerySchema;
