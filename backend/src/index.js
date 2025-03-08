import app from "./app.js";
import router from "../route/index.js";
import MONGODB from "../mongoDB/index.js";
import cors from "cors"
import multer from "multer"
app.use("/", router);


await MONGODB()
.catch(err=>console.log(err))

app.listen(8000, () => {
    console.log(`Server running at http://localhost:8000`);
});