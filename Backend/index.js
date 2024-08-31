import express from 'express';
import { PORT, mongoDBURL } from './config.js'; // import config.js file
import mongoose from 'mongoose';

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Creat a first HTTP Route"); 
});

mongoose     
  .connect(mongoDBURL) //connect DB
  .then(() => {
    console.log('App is Connected DB Successfully.');
    app.listen(PORT, () => {
      console.log(`App is listening the port : ${PORT}`); //   Listen on a 5555 port for incoming requests
    });
  })
  .catch((error) => {
    console.log(error);
  }) ;
