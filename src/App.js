import logo from './logo.svg';
import './App.css';
import Books from './Components/Books';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import BooksContext, { BooksProvider } from './context/BooksContext';
import BookDetails from './Components/BookDetails';
import NotFound from './Components/NotFound';
import SecretBooks from './Components/SecretBooks';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
   <div>
    <BooksProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Books></Books>}></Route>
          <Route path ="/books" element={<Navigate to="/"/>}></Route>
          <Route path="/books/:bookId" element={<BookDetails></BookDetails>}></Route>
          <Route path ="*" element={<NotFound></NotFound>}></Route>
          <Route path='/secret' element={<PrivateRoute Component={<SecretBooks></SecretBooks>}></PrivateRoute>}></Route>
        </Routes>
      </Router>
   
    </BooksProvider>
   </div>
  )
}

export default App;
