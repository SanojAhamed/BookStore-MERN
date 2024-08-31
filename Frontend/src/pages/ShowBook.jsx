import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Backbutton';  // BackButton - A component that displays a back button.
import Spinner from '../components/Spinner';  // Spinner - A component that displays a loading spinner while the data is being fetched.

const ShowBook = () => {
  const [book, setBook] = useState({});      // book - A state variable that stores the book details.
  const [loading, setLoading] = useState(false);   // loading - A state variable that stores the loading status.
  const { id } = useParams();   // useParams - A hook that returns an object of key/value pairs of URL parameters.

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl font-bold text-green-700 mb-6 mt-5'>Show Book Detatils</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col bg-green-600 text-white rounded-xl shadow-lg p-6'>
          <div className='flex flex-col space-y-2'>
            <div className='flex'>
              <span className='text-lg font-semibold w-40'>Id:</span>
              <span>{book._id}</span>
            </div>
            <div className='flex'>
              <span className='text-lg font-semibold w-40'>Title:</span>
              <span>{book.title}</span>
            </div>
            <div className='flex'>
              <span className='text-lg font-semibold w-40'>Author:</span>
              <span>{book.author}</span>
            </div>
            <div className='flex'>
              <span className='text-lg font-semibold w-40'>Publish Year:</span>
              <span>{book.publishyear}</span>
            </div>
            <div className='flex'>
              <span className='text-lg font-semibold w-40'>Create Time:</span>
              <span>{new Date(book.createdAt).toLocaleString()}</span>
            </div>
            <div className='flex'>
              <span className='text-lg font-semibold w-40'>Last Update Time:</span>
              <span>{new Date(book.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
