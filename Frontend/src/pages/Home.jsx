    import React, { useEffect, useState } from "react"; // React - A JavaScript library for building user interfaces
    import axios from "axios";  // axios -  A popular promise-based HTTP client used for making HTTP requests to an API.
    import Spinner from "../components/Spinner";  // Spinner - A component that displays a loading spinner while the data is being fetched. 
    import { Link } from "react-router-dom";   // Link - A component that allows you to navigate between pages in your application.
    import { AiOutlineEdit } from "react-icons/ai";  // AiOutlineEdit - A component that displays an edit icon.
    import { BsInfoCircle } from "react-icons/bs";  // BsInfoCircle - A component that displays an info icon.
    import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";  // MdOutlineAddBox, MdOutlineDelete - Components that display an add and delete icon respectively.

    const Home = () => {                        // Home - A functional component that displays a list of books.
    const [books, setBooks] = useState([]);  
    const [loading, setLoading] = useState(false);
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
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold text-green-700 py-4">Books List</h1>
            <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
            </Link>
        </div>
        {loading ? (
            <Spinner />
        ) : (
            <table className="w-full border-separate border-spacing-2 py-4">
            <thead>
                <tr>
                <th className="bg-green-500 text-white font-bold border border-green-700 rounded-md py-2 px-4">
                    No
                </th>
                <th className="bg-green-500 text-white font-bold border border-green-700 rounded-md py-2 px-4">
                    Title
                </th>
                <th className="bg-green-500 text-white font-bold border border-green-700 rounded-md py-2 px-4 max-md:hidden">
                    Author
                </th>
                <th className="bg-green-500 text-white font-bold border border-green-700 rounded-md py-2 px-4 max-md:hidden">
                    Publish Year
                </th>
                <th className="bg-green-500 text-white font-bold border border-green-700 rounded-md py-2 px-4">
                    Operations
                </th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (    // map - A function that creates a new array with the results of calling.
                <tr key={book._id} className="h-8">
                    <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center">
                    {book.title}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.author}
                    </td>
                    <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {book.publishyear}
                    </td>

                    <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                        <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                        </Link>
                        <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                        </Link>
                        <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                        </Link>
                    </div>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
        </div>
    );
    };

    export default Home;
