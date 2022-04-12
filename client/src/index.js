import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./components/AboutPage/About";
import Home from "./components/HomePage/Home"
import Contact from "./components/ContactPage/ContactPage";
import Projects from "./components/ProjectsPage/Projects";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<About />}  />
                <Route path="/contact/" element={<Contact />}   />
                <Route path="/projects/"  element={<Projects />} />
            </Routes>
    </BrowserRouter>, 
    document.getElementById("root")
)