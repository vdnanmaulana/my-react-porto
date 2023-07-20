import React from "react";
import facebook from "../images/fb.svg";

const Content = () => {
  return (
    <>
      <div class="content">
        <div class="mt-2 md:mt-4 md:px-[150px]">
          <div class="mx-auto w-full">
            <div class="mx-auto grid grid-cols-1 md:grid-cols-2 text-white py-10">
              <div class="blog-content flex flex-col">
                <a
                  href="/"
                  class="content-card transition duration-300 ease-in-out px-5 py-5 hover:bg-zinc-800/50 backdrop-blur-lg rounded-xl mx-5 my-5 md:mr-10"
                >
                  <div class="flex flex-row items-center">
                    <span class="border-l-4 h-6 border-gray-500"></span>
                    <p class="mx-2 text-gray-400 text-sm font-semibold">
                      December, 2023
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <h2 class="mt-5 font-semibold">Hello world</h2>
                    <p class="mt-3 text-gray-400">
                      Most companies try to stay ahead of the curve when it
                      comes to visual design, but for Planetaria we needed to
                      create a brand that would still inspire us 100 years from
                      now when humanity has spread across our entire solar
                      system.
                    </p>
                    <p class="mt-3 text-sm text-blue-300 font-semibold">
                      Read me more →
                    </p>
                  </div>
                </a>
                <a
                  href="/"
                  class="content-card transition duration-300 ease-in-out px-5 py-5 hover:bg-zinc-800/50 backdrop-blur-lg rounded-xl mx-5 my-5 md:mr-10"
                >
                  <div class="flex flex-row items-center">
                    <span class="border-l-4 h-6 border-gray-500"></span>
                    <p class="mx-2 text-gray-400 text-sm font-semibold">
                      December, 2023
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <h2 class="mt-5 font-semibold">Hello world</h2>
                    <p class="mt-3 text-gray-400">
                      Most companies try to stay ahead of the curve when it
                      comes to visual design, but for Planetaria we needed to
                      create a brand that would still inspire us 100 years from
                      now when humanity has spread across our entire solar
                      system.
                    </p>
                    <p class="mt-3 text-sm text-blue-300 font-semibold">
                      Read me more →
                    </p>
                  </div>
                </a>
              </div>
              <div class="works mx-10 md:mx-0 lg:pl-16 xl:pl-24 mt-5">
                <div class="cv-download border border-2 border-zinc-500/50 p-4 rounded-2xl">
                  <div class="flex flex-row items-center">
                    <i class="px-2 py-2 bg-zinc-800 rounded-lg bx bx-briefcase text-xl"></i>
                    <p class="ml-4 font-semibold">Works</p>
                  </div>
                  <div class="mt-4 flex items-center">
                    <img class="h-12 w-12" src={facebook} />
                    <div class="mx-2 flex flex-col gap-x-2 w-full">
                      <h1 class="text-sm font-medium">Facebook</h1>
                      <div class="flex justify-between">
                        <h2 class="text-xs">Developer</h2>
                        <h2 class="text-xs">2021 - Present</h2>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 down-cv-button">
                    <a
                      href="/"
                      class="flex block justify-center px-2 py-2 rounded-lg bg-zinc-800/50 items-center text-sm hover:bg-zinc-700/50 transition duration-200"
                    >
                      Download CV&nbsp;<i class="bx bxs-download"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
