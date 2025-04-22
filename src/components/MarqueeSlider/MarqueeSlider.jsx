"use client"

import React from 'react';
import Image from 'next/image';
import styles from './MarqueeSlider.module.css';

const MarqueeSlider = () => {
    return (
        <div className="w-full overflow-hidden py-8">
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeTrack}>
                    {/* First set of images */}
                    <div className={styles.marqueeContent}>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/1.png"
                                alt="Partner Logo 1"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/2.png"
                                alt="Partner Logo 2"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/3.png"
                                alt="Partner Logo 3"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/4.png"
                                alt="Partner Logo 4"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/5.png"
                                alt="Partner Logo 5"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className={styles.marqueeContent}>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/1.png"
                                alt="Partner Logo 1"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/2.png"
                                alt="Partner Logo 2"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/3.png"
                                alt="Partner Logo 3"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/4.png"
                                alt="Partner Logo 4"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="w-[200px] md:w-[250px] flex-shrink-0">
                            <Image
                                src="/Marquee/5.png"
                                alt="Partner Logo 5"
                                width={120}
                                height={40}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeSlider; 