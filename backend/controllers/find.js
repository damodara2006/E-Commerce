import MenSchema from "../models/men.js";
import WomenSchema from "../models/women.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ElectronicsSchema from "../models/electronics.js";
import JewellerySchema from "../models/jewellery.js";
import ShoesSchema from "../models/shoes.js";
import KidsSchema from "../models/kids.js";
import SportsSchema from "../models/sports.js";
import ToysSchema from "../models/toys.js";
const Men = AsyncHandler(async (req, res) => {
  let data = [];
  const alldata = await MenSchema.find({});
  alldata.forEach((list) => {
    data.push(list);
  });
  return res.send(data);
});


const alldata = AsyncHandler(async(req,res)=>{
  let datas = [];
  const data1 = await WomenSchema.find({});
  const data2 = await MenSchema.find({});
  const data3 = await ElectronicsSchema.find({});
  const data4 = await JewellerySchema.find({});
  const data5 = await ShoesSchema.find({});
  const data6 = await KidsSchema.find({});
  const data7 = await SportsSchema.find({});
  const data8 = await ToysSchema.find({});

   data1.forEach(async(data)=>{
     datas.push(data)
  })

  data2.forEach(async(data)=>{
    datas.push(data)
 })
 data3.forEach(async(data)=>{
  datas.push(data)
})
data4.forEach(async(data)=>{
  datas.push(data)
})
data5.forEach(async(data)=>{
  datas.push(data)
})
data6.forEach(async(data)=>{
  datas.push(data)
})
data7.forEach(async(data)=>{
  datas.push(data)
})
  
data8.forEach(async(data)=>{
  datas.push(data)
})
  await res.json(datas)

})

const Women = AsyncHandler(async (req, res) => {
  let data = [];
  const alldata = await WomenSchema.find({});
  alldata.forEach((list) => {
    data.push(list);
  });
  return res.send(data);
});

const Electronics = AsyncHandler(async (req, res) => {
  let data = [];
  const alldata = await ElectronicsSchema.find({});
  alldata.forEach((list) => {
    data.push(list);
  });
  return res.send(data);
});

const Jewellery = AsyncHandler(async (req, res) => {
  let data = [];
  const alldata = await JewellerySchema.find({});
  alldata.forEach((list) => {
    data.push(list);
  });
  return res.send(data);
});

const Shoes = AsyncHandler(async (req, res) => {
    let data = [];
    const alldata = await ShoesSchema.find({});
    alldata.forEach((list) => {
      data.push(list);
    });
    return res.send(data);
  });

  const Kids = AsyncHandler(async (req, res) => {
    let data = [];
    const alldata = await KidsSchema.find({});
    alldata.forEach((list) => {
      data.push(list);
    });
    return res.send(data);
  });

  const Sports = AsyncHandler(async (req, res) => {
    let data = [];
    const alldata = await SportsSchema.find({});
    alldata.forEach((list) => {
      data.push(list);
    });
    return res.send(data);
  });

  const Toys = AsyncHandler(async (req, res) => {
    let data = [];
    const alldata = await ToysSchema.find({});
    alldata.forEach((list) => {
      data.push(list);
    });
    return res.send(data);
  });

export { Men, Women, Electronics, Jewellery ,Shoes,Kids , Toys , Sports ,alldata };
