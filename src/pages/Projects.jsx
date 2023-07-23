import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import img5 from "../images/img5.jpg"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
    <Navbar/>
    <div class="mt-12 flex items-center justify-center">
      <div className="max-w-7xl mx-4 w-full border-2 rounded-3xl border-zinc-800/80 p-4">
        <div className="my-8 w-full lg:w-1/2 ">
        <div className="group p-4 shadow rounded-2xl">
          <h1 className='text-4xl font-semibold leading-[45px]'>
            Things I’ve made trying to put my dent in&nbsp; 
            <span className="group-hover:text-green-500 transition duration-300">the universe</span>.
          </h1>
          <p className='mt-4 text-zinc-300'>
            I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
          </p>
        </div>

        </div>
        <div class="mt-5 grid lg:grid-cols-3 gap-4">
          <Link to='/' class="hover:bg-zinc-800/80 transition duration-250 ease-in-out p-4 shadow rounded-lg"> 
            <img src={img5} className="w-20 h-20 object-cover rounded-full border-4 border-zinc-500/50" />
            <h1 className='mt-2 text-lg font-medium'>planetarium.com</h1>
            <h2 className='mt-2 text-sm text-zinc-400'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
            <p className='flex items-center mt-2 text-sm text-zinc-200 font-medium gap-x-2'><i class='bx bx-link'></i>Github</p>
          </Link>

          <Link to='/' class="hover:bg-zinc-800/80 transition duration-250 ease-in-out p-4 shadow rounded-lg"> 
            <img src={img2} className="w-20 h-20 object-cover rounded-full border-4 border-zinc-500/50" />
            <h1 className='mt-2 text-lg font-medium'>planetarium.com</h1>
            <h2 className='mt-2 text-sm text-zinc-400'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
            <p className='flex items-center mt-2 text-sm text-zinc-200 font-medium gap-x-2'><i class='bx bx-link'></i>Github</p>
          </Link>

          <Link to='/' class="hover:bg-zinc-800/80 transition duration-250 ease-in-out p-4 shadow rounded-lg"> 
            <img src={img4} className="w-20 h-20 object-cover rounded-full border-4 border-zinc-500/50" />
            <h1 className='mt-2 text-lg font-medium'>planetarium.com</h1>
            <h2 className='mt-2 text-sm text-zinc-400'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
            <p className='flex items-center mt-2 text-sm text-zinc-200 font-medium gap-x-2'><i class='bx bx-link'></i>Github</p>
          </Link>

          <Link to='/' class="hover:bg-zinc-800/80 transition duration-250 ease-in-out p-4 shadow rounded-lg"> 
            <img src={img1} className="w-20 h-20 object-cover rounded-full border-4 border-zinc-500/50" />
            <h1 className='mt-2 text-lg font-medium'>planetarium.com</h1>
            <h2 className='mt-2 text-sm text-zinc-400'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
            <p className='flex items-center mt-2 text-sm text-zinc-200 font-medium gap-x-2'><i class='bx bx-link'></i>Github</p>
          </Link>

          <Link to='/' class="hover:bg-zinc-800/80 transition duration-250 ease-in-out p-4 shadow rounded-lg"> 
            <img src={img5} className="w-20 h-20 object-cover rounded-full border-4 border-zinc-500/50" />
            <h1 className='mt-2 text-lg font-medium'>planetarium.com</h1>
            <h2 className='mt-2 text-sm text-zinc-400'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
            <p className='flex items-center mt-2 text-sm text-zinc-200 font-medium gap-x-2'><i class='bx bx-link'></i>Github</p>
          </Link>

          <Link to='/' class="hover:bg-zinc-800/80 transition duration-250 ease-in-out p-4 shadow rounded-lg"> 
            <img src={img2} className="w-20 h-20 object-cover rounded-full border-4 border-zinc-500/50" />
            <h1 className='mt-2 text-lg font-medium'>planetarium.com</h1>
            <h2 className='mt-2 text-sm text-zinc-400'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h2>
            <p className='flex items-center mt-2 text-sm text-zinc-200 font-medium gap-x-2'><i class='bx bx-link'></i>Github</p>
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Projects