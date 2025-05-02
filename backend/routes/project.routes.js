import express from "express"
import { create } from "../controller/project.controller.js";

const router = express.Router()

router.post("/create", create);

export default router