import { pollValidationSchema } from "./pollSchema.js";
import { pollsCollection } from "../db.js";
import dayjs from 'dayjs'

export async function pollSchemaValidation(req, res, next) {
    const { title } = req.body;

    const { error } = pollValidationSchema.validate(title);

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  
    next();
}

export async function pollCreation(req,res){
    const { title } = req.body;
    let {expireAt} = req.body

    try {
        const pollcheck = await pollsCollection.findOne({ title });
        if (pollcheck) {
            return console.log("Essa enquete já existe");
        }} catch (err) {
            console.log(err);
        res.sendStatus(500);
    }
    
    if(!expireAt){
        expireAt = dayjs().add(30, 'day')
    }

    const poll = {
        title: title,
        expireAt: expireAt
    }

    try {
        await usersCollection.insertOne({poll});
        res.send(poll);
    } catch (err) {
        console.log(err);
    res.sendStatus(500);
    }
}