import express from "express";
import { fork } from "child_process";
import createTime from "./setTime.mjs";
import controller from "./controller.mjs";

const app = express();

const childProcess = fork("./doWorkTime.mjs");

childProcess.on("message", createTime.cpCb);

app.get("/time", (req, res) => {
  createTime.setTime(childProcess, parseInt(req.query.duration), (message) => {
    res.send(message);
  });
});

app.listen(4000, console.log.bind(console)("listening on 4000"));
