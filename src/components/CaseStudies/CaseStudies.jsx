"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
    const caseStudies = [
        {
            id: 1,
            title: "AI-Powered Customer Support",
            description: "How a leading tech company reduced response time by 80% using AI agents",
            image: "/assets/case-studies/case1.jpg",
            category: "Customer Service",
            metrics: "80% faster response time"
        },
        {
            id: 2,
            title: "24/7 Sales Automation",
            description: "Transforming sales operations with intelligent AI agents",
            image: "/assets/case-studies/case2.jpg",
            category: "Sales",
            metrics: "45% increase in conversions"
        },
        {
            id: 3,
            title: "Enterprise Integration",
            description: "Seamless AI agent integration in a Fortune 500 company",
            image: "/assets/case-studies/case3.jpg",
            category: "Enterprise",
            metrics: "99.9% uptime achieved"
        }
    ];

    return (
        <section className={styles.caseStudiesSection}>
            <div className="container mx-auto md:px-4 md:py-32">
                <div className="max-w-[1000px] mx-auto text-center">
                    {/* Subtitle */}
                    <p className="text-[#9CA3AF] text-lg mb-6 tracking-wide">
                        Case studies
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-4xl lg:text-6xl font-serif text-white leading-[1.2]">
                        See how enterprises drive efficiency and growth with Decagon.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies; 