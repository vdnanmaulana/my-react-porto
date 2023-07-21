import React from "react";
import ProfileImage from "../images/nan.jpg";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="flex flex-col mx-auto py-28 px-4 md:px-[150px]">
          <img
            src={ProfileImage}
            className="mx-auto md:mx-0 h-[100px] w-[100px] rounded-full border-4 border-zinc-500/50"
          />
          <h1 className="mt-4 text-2xl text-center md:text-start md:text-4xl text-white font-semibold">
            Junior web developer
          </h1>
          <p className="mt-4 text-white w-full md:w-1/2 leading-8 text-center md:text-start">
            Hello. I’m a Junior Web Developer. I currently learning web
            development like Laravel, CodeIgniter, and React.
          </p>
          <div className="mt-4 social">
            <ul className="flex gap-4 justify-center md:justify-normal">
              <li>
                <a href="https://twitter.com/adnanmaulana__" target="_blank">
                  <i class="bx bxl-twitter text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/pixelmind__" target="_blank">
                  <i class="bx bxl-instagram text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/vdnanmaulana" target="_blank">
                  <i class="bx bxl-github text-3xl"></i>
                </a>
              </li>
              <li>
                <a href="https://dribbble.com/adnanmaulana" target="_blank">
                  <i class="bx bxl-dribbble text-3xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
