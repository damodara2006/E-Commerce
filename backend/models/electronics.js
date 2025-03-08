import mongoose from "mongoose";
import { Schema } from "mongoose";

const electronics = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
});

const ElectronicsSchema = mongoose.model("electronics", electronics);
export default ElectronicsSchema;
