import AsyncHandler from "../utils/AsyncHandler.js";
import MenSchema from "../models/men.js";
import WomenSchema from "../models/women.js";
import ElectronicsSchema from "../models/electronics.js";
import JewellerySchema from "../models/jewellery.js";
import ShoesSchema from "../models/shoes.js";
import KidsSchema from "../models/kids.js";
import SportsSchema from "../models/sports.js";
import ToysSchema from "../models/toys.js";
import { cartSchema } from "../models/cart.js";
const Menlist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;

  if (!name) {
    return res.send("Name required");
  }
  const newMen = new MenSchema({
    name: name,
    url: url,
    price: price
  });

  await newMen.save();
  res.send(newMen);
});

const Womenlist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;
  const newWomen = new WomenSchema({
    name: name,
    url: url,
    price: price
  });

  await newWomen.save();
  res.send(newWomen);
});

const Electronicslist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;
  const newElectornics = new ElectronicsSchema({
    name: name,
    url: url,
    price: price
  });

  await newElectornics.save();
  res.send(newElectornics);
});

const Jewellerylist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;
  const newJewellery = new JewellerySchema({
    name: name,
    url: url,
    price: price
  });

  await newJewellery.save();
  res.send(newJewellery);
});

const Shoeslist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;

  const newShoe = new ShoesSchema({
    name: name,
    url: url,
    price: price
  });

  await newShoe.save();
  res.send(newShoe);
});

const Kidslist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;

  const newKids = new KidsSchema({
    name: name,
    url: url,
    price: price
  });

  await newKids.save();
  res.send(newKids);
});

const Sportslist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;

  const newSport = new SportsSchema({
    name: name,
    url: url,
    price: price
  });

  await newSport.save();
  res.send(newSport);
});

const Toyslist = AsyncHandler(async (req, res) => {
  const { name, url, price } = req.body;

  const newToy = new ToysSchema({
    name: name,
    url: url,
    price: price
  });

  await newToy.save();
  res.send(newToy);
});

const cart = AsyncHandler(async (req, res) => {
  const { id } = req.body;

  const newCart = new cartSchema({
    id: id
  });

  await newCart.save();
  return res.send(newCart);
});

const allcart = AsyncHandler(async (req, res) => {
  const data = await cartSchema.find({});
  res.send(data);
});

const allcarts = AsyncHandler(async (req, res) => {
  const { array } = req.body;

  let men = MenSchema;
  let women = WomenSchema;
  let data = [];
  for (let element of array) {
    let items = await men.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await women.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await ElectronicsSchema.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await JewellerySchema.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await ShoesSchema.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await KidsSchema.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await SportsSchema.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  for (let element of array) {
    let items = await ToysSchema.findById(element.id);
    if (items) {
      data.push(items);
    }
  }
  await res.json(data);
});

const cartdlt = AsyncHandler(async (req, res) => {
  const { id } = req.body;

  const men = await cartSchema.deleteOne({ id: id });

  await res.send(men);
});

export {
  Menlist,
  Womenlist,
  Electronicslist,
  Jewellerylist,
  Toyslist,
  Sportslist,
  Kidslist,
  Shoeslist,
  cart,
  allcart,
  allcarts,
  cartdlt
};
