"use client"

import React from 'react';
import Image from 'next/image';
import imageOne from '@/assets/CompanyCards/three.png';
import imageTwo from '@/assets/CompanyCards/two.png';
import imageThree from '@/assets/CompanyCards/one.png';

const companies = [
    {
        name: 'Bilt',
        description: 'Bilt uses Decagon to automate tickets and free up the team by integrating deeply with internal systems.',
        image: imageOne,
        bgColor: 'bg-[#1C1C1C]',
        hoverOverlay: 'group-hover:bg-[#5A54FF]'
    },
    {
        name: 'ClassPass',
        description: "ClassPass increased deflection rate by 10x and scaled customer chat to 24/7 with Decagon's AI agents.",
        image: imageTwo,
        bgColor: 'bg-[#1C1C1C]',
        hoverOverlay: 'group-hover:bg-[#FF4500]'
    },
    {
        name: 'Substack',
        description: 'Substack achieved great efficiency while engaging their readers and writers by handling actions and complex workflows.',
        image: imageThree,
        bgColor: 'bg-[#1C1C1C]',
        hoverOverlay: 'group-hover:bg-[#5A54FF]'
    }
];

const CompanyCards = () => {
    return (
        <section className="bg-black border-0 border-red-700 px-4 py-16 md:py-24">
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {companies.map((company) => (
                        <div
                            key={company.name}
                            className="group relative overflow-hidden rounded-3xl cursor-pointer"
                        >
                            <div className={`${company.bgColor} relative h-full flex flex-col`}>
                                {/* Top Section with Image and Hover Effect */}
                                <div className="relative min-h-[280px] overflow-hidden flex items-center">
                                    {/* Background Image */}
                                    <Image
                                        src={company.image}
                                        alt={`${company.name} background`}
                                        className="w-[100px] h-[90px] m-auto z-100"
                                        priority
                                    />
                                    {/* Dot Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="h-full w-full"
                                            style={{
                                                backgroundImage: 'radial-gradient(circle, #333333 1.5px, transparent 1.5px)',
                                                backgroundSize: '16px 16px',
                                                backgroundPosition: '0 0'
                                            }}>
                                        </div>
                                    </div>
                                    {/* Hover Color Overlay */}
                                    <div className={`absolute inset-0 transition-colors duration-300 ${company.hoverOverlay}`}></div>
                                </div>

                                {/* Bottom Section with Text */}
                                <div className="relative p-8 bg-[#1C1C1C]">
                                    <h6 className="text-white text-2xl md:text-2xl font-serif mb-4 font-light">
                                        {company.name}
                                    </h6>
                                    <p className="text-gray-400 text-md leading-relaxed">
                                        {company.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyCards; 