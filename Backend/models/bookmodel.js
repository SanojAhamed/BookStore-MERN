import mongoose from "mongoose";

const bookschema = mongoose.Schema(   //Mongoose Schema defines the structure and property of the document in the MongoDB collection
  {
    title: {
      type: String,
      requried: true,
    },

    author: {
      type: String,
      requried: true,
    },

    publishyear: {
      type: Number,
      requried: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Cat', bookschema);  // export - import in other files
