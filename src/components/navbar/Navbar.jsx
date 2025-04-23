"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '@/assets/hero/logo.png';
import wlogo from '@/assets/hero/whitelogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed w-screen z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <div className="border-0 border-red-600  px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src={isScrolled ? wlogo : logo}
                                alt="Decagon Logo"
                                width={32}
                                height={32}
                                className="w-10 h-12"
                            />
                            <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                                Decagon
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center border-0 border-red-700 space-x-2 ml-[-500px] mt-3">
                        <div className="relative">
                            <button
                                onMouseEnter={() => setShowProductDropdown(true)}
                                onMouseLeave={() => setShowProductDropdown(false)}
                                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isScrolled ? 'text-black hover:text-gray-900' : 'text-white hover:text-gray-900'
                                    }`}
                            >
                                Product
                                <svg
                                    className="ml-2 h-4 w-4"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {showProductDropdown && (
                                <div
                                    onMouseEnter={() => setShowProductDropdown(true)}
                                    onMouseLeave={() => setShowProductDropdown(false)}
                                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                                >
                                    <Link
                                        href="/product/feature1"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Feature 1
                                    </Link>
                                    <Link
                                        href="/product/feature2"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Feature 2
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/resources"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/customers"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Customers
                        </Link>
                        <Link
                            href="/careers"
                            className={`px-3 py-2 rounded-md text-sm font-medium ${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            Careers
                        </Link>
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden md:flex ml-[-250px] mr-[30px] border-0 border-red-700 items-center space-x-4">
                        <Link
                            href="/signin"
                            className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${isScrolled
                                ? 'text-gray-600 hover:text-gray-900 border border-gray-300'
                                : 'text-gray-900 bg-white hover:bg-gray-100'
                                }`}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/demo"
                            className="bg-[#6366F1] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#5558E6] transition-colors duration-300 flex items-center"
                        >
                            Get a demo
                            <svg
                                className="ml-2 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' : 'text-white hover:text-gray-200'
                                }`}
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className={`px-2 pt-2 pb-3 h-[330px] space-y-1 sm:px-3 ${isScrolled ? 'bg-white' : 'bg-white text-gray-900'}`}>
                    <Link
                        href="/product"
                        className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                        Product
                    </Link>
                    <Link
                        href="/resources"
                        className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                        Resources
                    </Link>
                    <Link
                        href="/customers"
                        className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                        Customers
                    </Link>
                    <Link
                        href="/careers"
                        className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
                    >
                        Careers
                    </Link>
                    <div className='mt-15 flex justify-around w-screen'>
                        <Link
                            href="/signin"
                            className={`block px-5 py-2 border-1 text-black border-gray-900 w-[45%] text-center rounded-[30px] font-medium ${isScrolled ? 'text-black hover:text-black hover:bg-gray-100' : 'text-black hover:text-white hover:bg-gray-700'
                                }`}
                        >
                            Sign in
                        </Link>
                        <Link
                            href="/demo"
                            className="block bg-indigo-600 w-[45%] text-center text-white px-3 py-2 rounded-[30px] text-base font-medium hover:bg-indigo-700 transition-colors duration-300"
                        >
                            Get a demo →
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
