import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className=" text-[100px] font-semibold">404</h1>
        <h2 className="text-2xl">Sepertinya kamu tersesat</h2>
        <p className="mt-4 text-zinc-300/70">
          Kembali ke{" "}
          <Link
            className="text-white hover:text-blue-300/90 transition duration-200 ease-in-out"
            to="/"
          >
            halaman utama
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
