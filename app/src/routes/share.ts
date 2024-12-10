import express, {Router} from "express"
import shareController from "../controller/share"
import { userAuth } from "../middleware/userMiddleware";

const router: Router = express.Router();

router.post("/share", userAuth, shareController.createLinkCtlr)
router.get("/:shareLink", shareController.getLinkCtlr);

export default router;