import express from 'express';
import { sendPromt } from '../controller/promt.controller.js';
import useMiddleWare from '../middleware/promt.middleware.js';
const router= express.Router();
router.post("/promt", useMiddleWare, sendPromt);
export default router;