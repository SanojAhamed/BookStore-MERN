import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'; 

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2 py-4">
    <thead>
        <tr>
        <th className="bg-green-600 text-white font-bold border border-green-700 rounded-md py-2 px-4">
            No
        </th>
        <th className="bg-green-600 text-white font-bold border border-green-700 rounded-md py-2 px-4">
            Title
        </th>
        <th className="bg-green-600 text-white font-bold border border-green-700 rounded-md py-2 px-4 max-md:hidden">
            Author
        </th>
        <th className="bg-green-600 text-white font-bold border border-green-700 rounded-md py-2 px-4 max-md:hidden">
            Publish Year
        </th>
        <th className="bg-green-600 text-white font-bold border border-green-700 rounded-md py-2 px-4">
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
  );
};

export default BooksTable;