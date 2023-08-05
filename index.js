import express from 'express'
import 'dotenv/config'
import dbConnect from './config/dbConnect.js';
import { addParagraph, deleteParagraph, getdata } from './controller/typingController.js';
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json())




app.get("/", (req, res)=>{
    res.send("Typing Data API Running...")
})

app.get("/getdata", getdata)

app.post("/add-paragraph", addParagraph)

app.post("/delete-paragraph", deleteParagraph)

const PORT = process.env.PORT || 3001;

app.listen(PORT, async (req, res)=>{
    await dbConnect()
    console.log(`App is running on Port : ${PORT}`)
})