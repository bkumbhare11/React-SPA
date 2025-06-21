import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Requests from "./pages/Requests";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import UserDetails from "./pages/UserDetails";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/requests" element={<Requests />}></Route>
        <Route path="/:username" element={<UserDetails />}></Route>
        <Route path="/postsData/:id" element={<Post />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
