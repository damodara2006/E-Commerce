import { Router } from "express"
import { Menlist } from "../controllers/index.js"
import Men from "../models/men.js"
import { AllData } from "../controllers/find.js"
const router = Router()

router.route("/").post(Menlist)
router.route("/alluser").get(AllData)

export default router