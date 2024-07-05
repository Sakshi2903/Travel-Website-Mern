import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import About from './component/About';
import ErrorPage from './component/ErrorPage';
import {Route, Routes} from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
          <Navbar />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
    </>
  )
}

export default App
