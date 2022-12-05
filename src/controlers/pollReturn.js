import { pollsCollection } from "../db.js";

export async function findpolls(req, res) {
  
  try {
    const polls = await pollsCollection
      .find()
      .toArray();

    res.send(polls);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}