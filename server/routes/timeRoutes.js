import express from "express"
import {getTime, updateTime} from "../controllers/timeControllers"

const router = express.Router();

router.get("/:id", getTimeById);
