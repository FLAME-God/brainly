import express, {Router} from "express";
import authCntroller from "../controller/user"

const router: Router = express.Router();

router.post("/signup", authCntroller.register);
router.post("/signin", authCntroller.login);

export default router;