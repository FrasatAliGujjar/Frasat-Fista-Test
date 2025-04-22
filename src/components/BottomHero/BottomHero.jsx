"use client"

import React from 'react';
import Footer from '../Footer/Footer';

const BottomHero = () => {
    return (
        <>
            <section className="relative bg-[#111111] h-fit flex flex-col items-center justify-center overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#111111] to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="container h-fit border-0 border-red-600  mx-auto  relative">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        {/* Heading */}
                        <h1 className="z-2 text-4xl mt-20 md:text-2xl lg:text-5xl text-white font-serif mb-20 tracking-wide leading-tight">
                            The future of customer <br /> experience starts here.
                        </h1>

                        {/* Crystal Video Container */}
                        <div className="relative w-full max-w-2xl aspect-[16/9] mt-8">
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Glow effect behind video */}
                                <div className="absolute w-full h-full bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-xl"></div>

                                {/* Crystal Video */}
                                <div className="relative mt-[-200px] md:mt-[-350px] z-10 w-full h-fit">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-[500px] h-[400px] m-auto transform transition-transform duration-500 blur-[1px] rounded-[20px]"
                                    >
                                        <source src="/Crystel.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                {/* footer  */}

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default BottomHero;
