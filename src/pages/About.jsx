import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img5 from "../images/img5.jpg";
import img4 from "../images/img4.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <div class="mt-12 flex items-center justify-center">
      <div className="max-w-7xl mx-4 w-full border-2 rounded-3xl border-zinc-800/80 p-4">
        <div class="my-8 p-4 grid lg:grid-cols-2 gap-3">
          <div className="group p-4 shadow rounded-2xl">
            <h1 className='text-4xl font-semibold leading-[45px]'>
              Hello, Im &nbsp; 
              <span className="group-hover:text-green-500 transition duration-300">Adnan Maulana</span>.
              A Junior Web Developer
            </h1>
            <p className='mt-4 leading-7 text-zinc-300'>
            I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.
            </p>
            <p className='mt-4 leading-7 text-zinc-300'>
            The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p className='mt-4 leading-7 text-zinc-300'>
            I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.
            </p>
            <p className='mt-4 leading-7 text-zinc-300'>
            Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards.
            </p>

          </div>
          <div className="mt-5 flex flex-col justify-start mx-auto">
            <img src={img4} className="object-cover rounded-2xl rotate-3 w-[400px] h-[400px]" />
            <div className="mt-10">
              <ul className="flex flex-col gap-y-3">
                <li className="flex">
                  <Link to="https://twitter.com/adnanmaulana__" target="_blank" className="text-md flex items-center gap-x-3 hover:text-blue-400 transition duration-200 ease-in-out"><i class='bx bxl-twitter text-2xl'></i> 
                  Follow on twitter
                  </Link>
                </li>
                <li className="flex">
                  <Link to="https://instagram.com/pixelmind__" target="_blank" className="text-md flex items-center gap-x-3 hover:text-blue-400 transition duration-200 ease-in-out"><i class='bx bxl-instagram text-2xl'></i> 
                  Follow on instagram
                  </Link>
                </li>
                <li className="flex">
                  <Link to="https://github.com/vdnanmaulana" target="_blank" className="text-md flex items-center gap-x-3 hover:text-blue-400 transition duration-200 ease-in-out"><i class='bx bxl-github text-2xl'></i> 
                  Follow on github
                  </Link>
                </li>
                <li className="flex">
                  <Link to="https://dribbble.com/adnanmaulana" target="_blank" className="text-md flex items-center gap-x-3 hover:text-blue-400 transition duration-200 ease-in-out"><i class='bx bxl-dribbble text-2xl'></i> 
                  Follow on dribbble
                  </Link>
                </li>
                <li className="flex">
                  <Link to="mailto:adnanmaulana@kakao.com" target="_blank" className="text-md flex items-center gap-x-3 hover:text-blue-400 transition duration-200 ease-in-out"><i class='bx bx-envelope text-2xl'></i> 
                  adnanmaulana@kakao.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default About;
