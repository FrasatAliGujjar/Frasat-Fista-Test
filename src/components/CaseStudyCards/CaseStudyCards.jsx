"use client"

import React from 'react';
import Image from 'next/image';
import duolingoOffice from '@/assets/CaseStudyCard/right.png';
import ripplingOffice from '@/assets/CaseStudyCard/left.jpg';
import duolingoLogo from '@/assets/CaseStudyCard/rightlogo.png';
import ripplingLogo from '@/assets/CaseStudyCard/leftlogo.png';

const CaseStudyCards = () => {
    return (
        <section className="bg-[#111111] md:px-4 md:py-20 border-0 border-white">
            <div className="mx-auto">
                <div className="flex p-2 md:p-16 flex-col lg:flex-row gap-5 md:gap-6">
                    {/* Left Card - 70% width */}
                    <div className="w-full lg:w-[70%] relative overflow-hidden rounded-2xl cursor-pointer group">
                        <div className="relative border-0 border-white h-[380px] w-full overflow-hidden">
                            <Image
                                src={duolingoOffice}
                                alt="Rippling case study"
                                fill
                                priority
                                className="object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 70vw"
                            />
                            {/* Default gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                            {/* Logo */}
                            <div className="w-32 md:w-40">
                                <Image
                                    src={duolingoLogo}
                                    alt="Duolingo logo"
                                    width={160}
                                    height={40}
                                    className="w-full h-[60px]"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-6">
                                <h3 className="text-white text-2xl md:text-2xl font-serif leading-tight">
                                    Regain lost time and elevate customer experience
                                </h3>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-white text-3xl md:text-3xl font-bold">
                                        80%
                                    </span>
                                    <span className="text-white/80 text-lg md:text-xl">
                                        resolution rate
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card - 30% width */}
                    <div className="w-full lg:w-[30%] relative overflow-hidden rounded-2xl cursor-pointer group">
                        <div className="relative h-[380px] w-full overflow-hidden">
                            <Image
                                src={ripplingOffice}
                                alt="Rippling case study"
                                fill
                                priority
                                className="object-cover z-0 transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                            {/* Default gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                            {/* Logo */}
                            <div className="w-32 md:w-40">
                                <Image
                                    src={ripplingLogo}
                                    alt="Rippling logo"
                                    width={160}
                                    height={100}
                                    className="w-full h-[60px]"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-6">
                                <h3 className="text-white text-2xl md:text-2xl font-serif leading-tight">
                                    Solve complex cases
                                </h3>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-white text-3xl md:text-3xl font-bold">
                                        10k
                                    </span>
                                    <span className="text-white/80 text-lg md:text-xl">
                                        businesses supported
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyCards; 