import express from "express";
import { Book } from './models/bookmodel.js';
import { PORT, mongoDBURL } from "./config.js"; // import config.js file
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Creat a first HTTP Route");
});

// Route for Save a new Book
app.post("/books", async (request, response) => {
  try {
    // Log the request body to see what is being sent
    console.log(request.body);

    // Validation
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishyear
    ) {
      return response.status(400).send({
        // Changed status code to 400 for client errors
        message: "Send all required fields: title, author, publishyear",
      });
    }

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishyear: request.body.publishyear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


//route the all book
app.get('/books', async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json({
      count: books.length,
      data: books
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

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
