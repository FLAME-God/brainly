import express, { Router } from "express";
import userRouter from "./user"
import contentRouter from "./content";

const router: Router = express.Router();

router.use("/user", userRouter);
router.use("/userContent", contentRouter);

export default router;