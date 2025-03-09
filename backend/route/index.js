import { Router } from "express";
import {
  Menlist,
  Womenlist,
  Electronicslist,
  Jewellerylist,
  Shoeslist,
  Kidslist,
  Sportslist,
  Toyslist
} from "../controllers/index.js";
import {
  Men,
  Women,
  Electronics,
  Jewellery,
  Shoes,
  Kids,
  Sports,
  Toys,
  alldata
} from "../controllers/find.js";

const router = Router();

router.route("/1").post(Menlist);
router.route("/2").post(Womenlist);
router.route("/3").post(Electronicslist);
router.route("/4").post(Jewellerylist);
router.route("/5").post(Shoeslist);
router.route("/6").post(Kidslist);
router.route("/7").post(Sportslist);
router.route("/8").post(Toyslist);

router.route("/alluser").get(alldata);
router.route("/alluser/1").get(Men);
router.route("/alluser/2").get(Women);
router.route("/alluser/3").get(Electronics);
router.route("/alluser/4").get(Jewellery);
router.route("/alluser/5").get(Shoes);
router.route("/alluser/6").get(Kids);
router.route("/alluser/7").get(Sports);
router.route("/alluser/8").get(Toys);


export default router;
