import mongoose from 'mongoose';  // import mongoose

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishyear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);  // export Book model
