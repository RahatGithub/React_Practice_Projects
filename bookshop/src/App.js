import Books from './components/Books';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
