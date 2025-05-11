import express from "express"
import { create, getProject } from "../controller/project.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router()

router.post("/create", protectRoute, create);
router.get("/", protectRoute, getProject);


export default router