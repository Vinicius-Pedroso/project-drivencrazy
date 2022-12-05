import express from 'express';
import { choiceValidation, createChoice } from '../controlers/choiceCreate.js';
import { findChoices } from '../controlers/choiceList.js';
import { findpolls } from '../controlers/pollReturn.js';
import { pollCreation, pollSchemaValidation } from '../controlers/pollValidation.js';

const router = express.Router();
router.post("/poll", pollSchemaValidation, pollCreation )
router.get("/poll", findpolls);
router.post("/choice", choiceValidation, createChoice);
router.get("/poll/:id/choice", findChoices)
router.post("/choice/:id/vote", )
router.get("/poll/:id/result", )
export default router;

