import mongoose, { Schema } from "mongoose"

const cart = new Schema({
    id:{
        type:Schema.ObjectId
    }

})

export const cartSchema = mongoose.model("cart",cart)