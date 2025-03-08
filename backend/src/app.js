import express from "express"
import cors from "cors"
import multer from "multer"
const app = express()

app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
const upload = multer()
app.use(upload.any())
export default app