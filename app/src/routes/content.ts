import express, { Router } from "express"
import contentController from "../controller/content";
import { userMiddleware } from "../middleware/usermiddleware";

const router: Router = express.Router();

router.post("/content", userMiddleware, contentController.createContentCtlr);
router.get("/content", userMiddleware, contentController.getContent);

export default router;

