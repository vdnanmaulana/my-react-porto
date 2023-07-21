import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img5 from "../images/img5.jpg";
import img4 from "../images/img4.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 py-[70px] mx-[50px] border-2 rounded-3xl border-zinc-500/50 ">
        <div className="grid grid-cols-1 gap-y-10 lg:mx-24 lg:gap-y-16 lg:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-4xl font-semibold">
              Hello👋 I am Adnan Maulana
            </h1>
            <h2 className="mt-2 text-lg font-medium">
              I am a junior web developer
            </h2>
            <div className="mt-5 space-y-6 text-base text-zinc-300">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-1 pl-32">
              <img
                src={img4}
                className="w-[300px] h-[300px] rounded-3xl rotate-[4deg] object-cover"
              />
            </div>
            <div className="mt-10 pl-32">
              <ul className="space-y-4 text-zinc-200">
                <li className="flex">
                  <a
                    href=""
                    className="flex gap-3 items-center font-medium hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    <i class="bx bxl-twitter text-2xl"></i>
                    Follow on Twitter
                  </a>
                </li>
                <li className="flex">
                  <a
                    href=""
                    className="flex gap-3 items-center font-medium hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    <i class="bx bxl-instagram text-2xl"></i>
                    Follow on Instagram
                  </a>
                </li>
                <li className="flex">
                  <a
                    href=""
                    className="flex gap-3 items-center font-medium hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    <i class="bx bxl-github text-2xl"></i>
                    Follow on Github
                  </a>
                </li>
                <li className="flex">
                  <a
                    href=""
                    className="flex gap-3 items-center font-medium hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    <i class="bx bxl-dribbble text-2xl"></i>
                    Follow on Dribbble
                  </a>
                </li>
                <li className="flex ">
                  <a
                    href=""
                    className="flex gap-3 items-center font-medium hover:text-blue-400 transition duration-200 ease-in-out"
                  >
                    <i class="bx bx-envelope text-2xl"></i>
                    adnanmaulana@kakao.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
