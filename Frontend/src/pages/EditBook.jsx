import React, { useState, useEffect } from 'react';
import BackButton from '../components/backbutton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author || '');
        setPublishYear(response.data.publishyear || '');
        setTitle(response.data.title || '');
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    if (!title || !author || !publishYear) {
      alert('Please fill in all fields.');
      return;
    }

    const data = {
      title,
      author,
      publishyear: publishYear,
    };

    console.log("Sending data:", data); // Log data being sent

    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          // server responded
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // no response received
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        enqueueSnackbar('Error occurred while editing the book', { variant: 'error' });
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl font-bold text-green-700 my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-green-400 rounded-xl w-[450px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-700'>Title</label>
          <input
            type='text'
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-green-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-700'>Author</label>
          <input
            type='text'
            value={author || ''}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-green-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-700'>Publish Year</label>
          <input
            type='number'
            value={publishYear || ''}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-green-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-green-500 text-white rounded m-8' onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditBook;