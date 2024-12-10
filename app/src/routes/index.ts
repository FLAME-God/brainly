import express, { Router } from "express";
import userRouter from "./user"
import contentRouter from "./content";
import shareRouter from "./share";

const router: Router = express.Router();

router.use("/user", userRouter);
router.use("/brain", contentRouter);
router.use("/brain", shareRouter);

export default router;