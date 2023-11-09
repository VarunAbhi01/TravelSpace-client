// to use REACT ROUTER DOM
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import { Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import Hotels from "./Pages/Hotels/Hotels";
import './App.css';
// import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
{/* theres unique id for each hotel so acc to the id rqsted hotel details will be displayed */}
            <Route path="/hotels/:id" element={<Hotel/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
