import express from "express";
import { Book } from "./models/booksmodel.js";
import { PORT, mongoDBURL } from "./config.js"; // import config.js file
import mongoose from "mongoose";
import bookRoute from './routes/bookRoute.js';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Creat a first HTTP Route");
});

app.use("/books", bookRoute); // Middelware - change the route

mongoose
  .connect(mongoDBURL) //connect DB
  .then(() => {
    console.log("App is Connected DB Successfully.");
    app.listen(PORT, () => {
      console.log(`App is listening the port : ${PORT}`); //   Listen on a 5555 port for incoming requests
    });
  })
  .catch((error) => {
    console.log(error);
  });
