import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import {Routes, Route} from "react-router-dom";

function Main() {
    return (
        <div className="Main">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
            </Routes>
        </div>
    )
}

export default Main;