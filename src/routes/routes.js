import express from 'express';
import { choiceValidation, createChoice } from '../middlewere/choiceCreate.js';
import { findpolls } from '../middlewere/pollReturn.js';
import { pollCreation, pollSchemaValidation } from '../middlewere/pollValidation.js';

const router = express.Router();
router.post("/poll", pollSchemaValidation, pollCreation )
router.get("/poll", findpolls);
router.post("/choice", choiceValidation, createChoice);
router.get("/poll/:id/choice", )
router.post("/choice/:id/vote", )
router.get("/poll/:id/result", )
export default router;
