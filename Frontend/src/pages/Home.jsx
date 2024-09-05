    import React, { useEffect, useState } from "react"; // React - A JavaScript library for building user interfaces
    import axios from "axios";  // axios -  A popular promise-based HTTP client used for making HTTP requests to an API.
    import Spinner from "../components/Spinner";  // Spinner - A component that displays a loading spinner while the data is being fetched. 
    import { Link } from "react-router-dom";   // Link - A component that allows you to navigate between pages in your application.
    import { AiOutlineEdit } from "react-icons/ai";  // AiOutlineEdit - A component that displays an edit icon.
    import { BsInfoCircle } from "react-icons/bs";  // BsInfoCircle - A component that displays an info icon.
    import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";  // MdOutlineAddBox, MdOutlineDelete - Components that display an add and delete icon respectively.
    import BooksTable from '../components/home/BooksTable';
    import BooksCard from '../components/home/BooksCard';

    const Home = () => {                        // Home - A functional component that displays a list of books.
    const [books, setBooks] = useState([]);  
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {        // useEffect - A hook that runs after the first render and after every update.
        setLoading(true);
        axios
        .get("http://localhost:5555/books")  // axios.get - A function that makes a GET request to the specified URL.
        .then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);

    return (
        <div className="p-4">
      <div className='flex justify-center items-center gap-x-4 mt-5 mb-3'>
        <button
          className='bg-green-500 hover:bg-green-700 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-green-500 hover:bg-green-700 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>

      </div>    
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-green-700 py-4">Books List</h1>
            <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
            </Link>
        </div>
       {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
        </div>
    );
    };

    export default Home;


    //from new branch