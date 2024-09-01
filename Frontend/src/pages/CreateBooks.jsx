import React, { useState } from "react";
import BackButton from "../components/backbutton"; // Ensure the import path is correct
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack"; // useSnackbar - A custom hook that returns an object with enqueueSnackbar function to show snackbar messages.


const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishyear: publishYear, // Make sure this matches the backend expectation
    };

    setLoading(true);
    axios
     .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      
      .catch((error) => {
        setLoading(false);
        alert('An error happened.');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl font-bold text-green-700 mb-6 mt-5">
        Create New Book
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-green-400 rounded-xl w-[400px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-green-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-green-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-700">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}   // onChange - A function that is called when the value of an element changes.
            className="border-2 border-green-500 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-green-500 text-white rounded"
          onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
