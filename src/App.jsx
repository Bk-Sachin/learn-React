import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/sign-in" element={<SignIn/>}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/About" element={<About/>}></Route>

  </Routes>
  </BrowserRouter>
}