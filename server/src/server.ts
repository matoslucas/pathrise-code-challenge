import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db/connection";
import cors from "cors";
import route from "./api/Task";

const app = express();

connectDB();

const extended: bodyParser.OptionsJson = { inflate: false };

app.use(express.json(extended));
app.use(cors());
app.use("/api/taskModel", route);

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.listen(8080, () => console.log("Server OK"));
