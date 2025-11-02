import express from "express"
import {getTimeById, start, stop, reset} from "../controllers/timeControllers.js"

const router = express.Router();

router.get("/:id", getTimeById);
router.put("/start/:id", start);
router.put("/stop/:id", stop);
router.put("/reset/:id", reset);

export default router;