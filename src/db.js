import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("drivencrazy")
export const pollsCollection = db.collection("polls");
export const choicesCollection = db.collection("polls");
export const voteCollections = db.collection("votes")