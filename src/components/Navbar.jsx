import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b border-neutral-200 px-4 sm:px-16 py-3 flex items-center justify-between w-full">
      <h1 className="text-3xl hidden sm:block">Instagram</h1>
      <div className="flex w-full justify-around sm:gap-7 sm:max-w-fit">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Requests">Requests</Link>
      </div>
    </div>
  );
}

export default Navbar;
