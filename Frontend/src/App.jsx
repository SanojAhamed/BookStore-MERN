import React from 'react'; 
import { Routes, Route } from 'react-router-dom';     // import Routes and Route components from react-router-dom
import Home from './pages/Home';   // import Home component from pages/Home
import CreateBooks from './pages/CreateBooks';  // import CreateBooks component from pages/CreateBooks
import ShowBook from './pages/ShowBook';  // import ShowBook component from pages/ShowBook
import EditBook from './pages/EditBook'; // import EditBook component from pages/EditBook
import DeleteBook from './pages/DeleteBook'; // import DeleteBook component from pages/DeleteBook


const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />  // Create a new route for CreateBooks component
      <Route path='/books/details/:id' element={<ShowBook />} />  // Create a new route for ShowBook component
      <Route path='/books/edit/:id' element={<EditBook />} />   // Create a new route for EditBook component
      <Route path='/books/delete/:id' element={<DeleteBook />} />  // Create a new route for DeleteBook component
    </Routes>
  );
};

export default App;