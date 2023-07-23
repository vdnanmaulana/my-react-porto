    import React from 'react'
    import Navbar from '../components/Navbar'
    import Footer from '../components/Footer'
    import img1 from "../images/img1.jpg"
    import img2 from "../images/img2.jpg"
    import img3 from "../images/img3.jpg"
    import img4 from "../images/img4.jpg"
    import img5 from "../images/img5.jpg"

    const Uses = () => {
    return (
        <>
        <Navbar/>
        <div class="mt-12 flex items-center justify-center">
            <div className="max-w-7xl mx-4 w-full border-2 rounded-3xl border-zinc-800/80 p-4">
                <div className="my-8 w-full lg:w-1/2">
                    <div className="group p-4 shadow rounded-2xl">
                    <h1 className='text-4xl font-semibold leading-[45px]'>
                        <span className="group-hover:text-green-500 transition duration-300">Software I use,</span>&nbsp;
                    gadgets I love, and other things I recommend.
                    </h1>
                    <p className='mt-4 text-zinc-300'>
                    I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.</p>
                    </div>
                </div>

                <div className="my-8 w-full">
                    <div className="p-4 grid lg:grid-cols-4">
                        <div className="font-medium ">Workstation</div>
                            <div className="mt-5 lg:mt-0 lg:pl-5 col-span-2">
                                <h1 className="font-medium">ROG GL553VD</h1>
                                <h2 className="mt-3 leading-7 text-zinc-400">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h2>
                            </div>
                            <div className="mt-5 col-span-2 lg:col-span-1 flex justify-center items-center">
                                <img src={img2} className="w-40 h-40 rounded-full object-cover" />
                            </div>
                    </div>

                    <div className="p-4 grid lg:grid-cols-4">
                        <div className="font-medium ">Development Tools</div>
                            <div className="mt-5 lg:mt-0 lg:pl-5 col-span-2">
                                <h1 className="font-medium">ROG GL553VD</h1>
                                <h2 className="mt-3 leading-7 text-zinc-400">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h2>
                            </div>
                            <div className="mt-5 col-span-2 lg:col-span-1 flex justify-center items-center">
                                <img src={img3} className="w-40 h-40 rounded-full object-cover" />
                            </div>
                    </div>

                    <div className="p-4 grid lg:grid-cols-4">
                        <div className="font-medium ">Design</div>
                            <div className="mt-5 lg:mt-0 lg:pl-5 col-span-2">
                                <h1 className="font-medium">Figma</h1>
                                <h2 className="mt-3 leading-7 text-zinc-400">We started using Figma as just a design tool but now it’s become our virtual whiteboard for the entire company. Never would have expected the collaboration features to be the real hook.</h2>
                            </div>
                            <div className="mt-5 col-span-2 lg:col-span-1 flex justify-center items-center">
                                <img src={img4} className="w-40 h-40 rounded-full object-cover" />
                            </div>
                    </div>

                    <div className="p-4 grid lg:grid-cols-4">
                        <div className="font-medium ">Productivity</div>
                            <div className="mt-5 lg:mt-0 lg:pl-5 col-span-2">
                                <h1 className="font-medium">ROG GL553VD</h1>
                                <h2 className="mt-3 leading-7 text-zinc-400">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</h2>
                            </div>
                            <div className="mt-5 col-span-2 lg:col-span-1 flex justify-center items-center">
                                <img src={img5} className="w-40 h-40 rounded-full object-cover" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
    }

    export default Uses