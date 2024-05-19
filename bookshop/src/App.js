import Books from './components/Books'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddStudent from './components/AddStudent'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add_student" element={<AddStudent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
