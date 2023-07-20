import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-center mt-10">
        <div className="px-8 py-4 border border-zinc-400/30 bg-zinc-800/60 rounded-full text-white ">
          <ul className="flex gap-8">
            <li className="hover:text-blue-400 transition duration-200">
              <a href="">Home</a>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <a href="">Works</a>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
