import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center mt-10">
        <div className="px-8 py-4 border border-zinc-400/30 bg-zinc-800/60 rounded-full text-white ">
          <ul className="flex gap-8">
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/uses">Uses</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
