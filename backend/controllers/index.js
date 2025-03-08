import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js"
import MenSchema from "../models/men.js";
const Menlist = AsyncHandler(async(req,res)=>{
    const {header,url} = req.body;

    if(!header){
        return res.send("Header required")
    }
    const newMen = new MenSchema({
        header:header,
        url:url
    })

    await newMen.save();
    res.send(newMen)
})

export {Menlist}