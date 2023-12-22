import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import fetchAndSaveProducts from "./productDB.js";
import cors from "cors";
import { router } from "./routes/products.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hi i am running!");
});

//middleware
app.use("/dashboard", router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
