import path from "path";
import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv, { config } from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({path: "./config/config.env"});

// app.use(cors({
//     origin: 'https://aayojan-event-planner.netlify.app/',
//     methods: ["POST"],
//     credentials: true
// }));

// app.options('*', cors({
//     origin: 'https://aayojan-event-planner.netlify.app/',
//     methods: ["POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true
// }));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/message",messageRouter);

dbConnection();
export default app;
