import express, {Express} from "express";
import appRouter from "./routes/index";
import dotenv from "dotenv";
import connectDB from "./utils/db";
dotenv.config();

const app: Express = express();
app.use(express.json());

app.use("/api/v1", appRouter);

const port = process.env.PORT || 3000;
const server = async () => {
    await connectDB();
    app.listen(port, ()=>{
        console.log(`server is runninng on port ${port}`)
    })     
}
server();



