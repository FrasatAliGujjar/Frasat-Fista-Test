"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from '../MarqueeSlider/MarqueeSlider';

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-[-120px] md:mt-[-230px] z-200">
            <div className="container border-0 border-red-500 mx-auto px-8 py-7">
                {/* Top Section with Logo and Navigation */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
                    {/* Logo Section */}
                    <div className="mb-8 lg:mb-0">
                        <div className="w-12 h-12 text-white">
                            <Image
                                src="/logo.png"
                                alt="Decagon Logo"
                                width={58}
                                height={58}
                                className="w-[150px] h-[80px]"
                            />
                        </div>
                        <div>
                            {/* Copyright */}
                            <p className="text-gray-400 text-sm mt-8 ml-2">
                                © 2025 Decagon. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                        <div>
                            {/* Footer Logo */}
                            <Image
                                src="/footerlogo.png"
                                alt="Decagon Logo"
                                width={58}
                                height={58}
                                className="w-[100px]"
                            />
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="text-[#9CA3AF] text-base mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
                                <li><Link href="/security" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
                                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/cookie-settings" className="text-gray-400 hover:text-white transition-colors">Cookie Settings</Link></li>
                                <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors">Docs</Link></li>
                            </ul>
                        </div>

                        {/* Contact Links */}
                        <div>
                            <h3 className="text-[#9CA3AF] text-base mb-4">Contact</h3>
                            <ul className="space-y-3">
                                <li><Link href="/sales" className="text-gray-400 hover:text-white transition-colors">Sales</Link></li>
                                <li><Link href="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
                                <li><Link href="/join-us" className="text-gray-400 hover:text-white transition-colors">Join us!</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer; 