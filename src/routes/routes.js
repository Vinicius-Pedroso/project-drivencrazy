import { Router } from "express";
import { choiceValidation, createChoice } from '../controlers/choiceCreate.js';
import { findChoices } from '../controlers/choiceList.js';
import { findpolls } from '../controlers/pollList.js';
import { pollCreation, pollSchemaValidation } from '../controlers/pollCreate.js';
import { createVote } from '../controlers/voteCreate.js';
import { getVotes } from '../controlers/voteGet.js';

const router = express.Router();

router.post("/poll", pollSchemaValidation, pollCreation )
router.get("/poll", findpolls);
router.post("/choice", choiceValidation, createChoice);
router.get("/poll/:id/choice", findChoices)
router.post("/choice/:id/vote", createVote)
router.get("/poll/:id/result", getVotes)

export default router;

