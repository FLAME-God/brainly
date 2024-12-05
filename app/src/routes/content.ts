import express, { Router } from "express"
import contentController from "../controller/content";
import { userAuth } from "../middleware/userMiddleware";

const router: Router = express.Router();

router.post("/content", userAuth, contentController.createContentCtlr);
router.get("/content", userAuth, contentController.getContent);
router.delete("./content", userAuth, contentController.deleteContent);

export default router;

