import express, { Application, Request, Response } from "express";
import path from "path";
import mongoose from "mongoose";

const app: Application = express();
const PORT: number = 4001;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/imageStorage",
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("mongodb listening");
    }
  }
);

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`🌏 running on http://localhost:${PORT} , 🛰 running on `));
