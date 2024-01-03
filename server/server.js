import express from "express";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 8081;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})

app.listen(port, () => {
    console.log(`Listening on port ${port}..`)
})