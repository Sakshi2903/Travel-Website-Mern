import React, { createContext, useReducer } from 'react';
import ReactDom from 'react-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import About from './component/About';
import Profile from './component/Profile';
import Logout from './component/Logout';
import ErrorPage from './component/ErrorPage';
import {Route, Routes} from "react-router-dom";
import "./App.css";

export const userContext = createContext();
const Routing = () => {
  return(
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
  )
};

const App = () => {
  return (

    <>
          <Navbar />
          <Routing />
    </>
  )
}

export default App
