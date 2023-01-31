import React from "react";
import Home from "../pages/Home"
import About from  "../pages/About"
import Register from "../component/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Navigator() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path='sign up' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigator;