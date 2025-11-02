import express from "express"
import {getTime, getTimeById, updateTime} from "../controllers/timeControllers.js"

const router = express.Router();

router.get("/", getTime);
router.get("/:id", getTimeById);
router.put("/:id", updateTime);

export default router;