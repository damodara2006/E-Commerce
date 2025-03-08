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

export { Men, Women, Electronics, Jewellery ,Shoes,Kids , Toys , Sports  };
