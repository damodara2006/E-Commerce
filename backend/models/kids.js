import mongoose from "mongoose";
import { Schema } from "mongoose";

const Kids = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
});

const KidsSchema = mongoose.model("Kids", Kids);
export default KidsSchema;
