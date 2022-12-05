import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';
import router from "./routes/routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});