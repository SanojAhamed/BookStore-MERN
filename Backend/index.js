import express, { request } from "express";

import { PORT, mongoDBurl } from "./config.js"; // import config.js file
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  //Parameter with callback function
  console.log(request);
  return response.status(257).send("first HTTP Route"); //FTP code
});


mongoose
  .connect(mongoDBurl) //connect DB
  .then(() => {
    // success and failure
    console.log("App is Connected Successfully.");
    app.listen(PORT, () => {
      // only run when DB server is successfull
      console.log("App is listening the port : ${PORT}"); //   Listen on a 5555 port for incoming requests
    });
  })

  // .catch((error) => {
  //   console.log(error);
  // });
