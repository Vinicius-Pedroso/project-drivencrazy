import express from 'express';
import { pollCreation, pollSchemaValidation } from '../middlewere/pollValidation';

const router = express.Router();
router.post("/poll", pollSchemaValidation, pollCreation )
router.get("/poll", );
router.post("/choice", );
router.get("/poll/:id/choice", )
router.post("/choice/:id/vote", )
router.get("/poll/:id/result", )
export default router;
