import MenSchema from "../models/men.js";
import AsyncHandler from "../utils/AsyncHandler.js";

const AllData = AsyncHandler(async (req, res) => {
    let data = []
    const alldata = await MenSchema.find({});
    alldata.forEach((list,)=>{
         data.push(list.header)
    })
    return res.send(data)   
});

export { AllData };