import { pollsCollection, choicesCollection } from "../db.js";
import { choiceValidationSchema } from "../middlewere/choiceSchema.js";

export async function choiceValidation(req, res, next){
    const {title, pollId} = req.body;

    const { error } = choiceValidationSchema.validate(title);

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }

    try {
        const poll = await pollsCollection.findOne({ pollId });
        if (!poll) {
            res.sendStatus(404)
        }} catch (err) {
            console.log(err);
        res.sendStatus(500);
    }

    try {
        const choicePoll = await choicesCollection.findOne({ title });
        if (!choicePoll) {
            res.sendStatus(409)
        }} catch (err) {
            console.log(err);
        res.sendStatus(500);
    }

    next()
}

export async function createChoice (req,res){
    const {title, pollId} = req.body;

    try {
        const choicePoll = await choicesCollection.findOne({ pollId });
        if (!choicePoll) {
            await choicesCollection.addOne(pollId)
        }} catch (err) {
            console.log(err);
        res.sendStatus(500);
    }
    
    const choice = {
        title,
        pollId
    }

    try {
        await choicesCollection.findOne({pollId}).insertOne({choice});
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
    res.sendStatus(500);
    }
    
}










