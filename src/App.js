// to use REACT ROUTER DOM
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";

import { Link } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Home/Hotel/Hotel";
import Hotels from "./Pages/Home/Hotels/Hotels";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
{/* theres unique id for each hotel so acc to the id rqsted hotel details will be displayed */}
            <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
