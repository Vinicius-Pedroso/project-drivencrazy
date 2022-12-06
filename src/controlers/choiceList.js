import { choicesCollection } from "../db.js";

export async function findChoices(req, res) {
    const id = req.params.id;
  
  try {
    const choices = await choicesCollection.findOne({id})
      .find()
      .toArray();

      if(!choices){
        res.sendStatus(404)
      }
    res.send(choices);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}