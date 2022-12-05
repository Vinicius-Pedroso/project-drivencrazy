import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const mongoClient = new MongoClient(process.env.MONGO_URI);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});