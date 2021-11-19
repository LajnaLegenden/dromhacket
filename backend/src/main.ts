import express from "express";
import * as _ from "lodash";
import { dashboardRouter } from "./routes/dashboard";
import cors from "cors";
const app = express();

const allowedOrigins = ["http://127.0.0.1:5500"];

app.use(cors());
//Accept json data in bodies
app.use(express.json({limit: '50mb'}));

app.use("/dashboard", dashboardRouter);

app.listen(3001);
