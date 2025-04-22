import React from 'react'
import Image from 'next/image'
import { Zap } from 'lucide-react'
import styles from './Features.module.css'
// Import company logos
import logos from '@/assets/Features/right2.png'


const Features = () => {

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-10 gap-5 md:gap-8">
                {/* Left Card - Auto-resolve issues */}
                <div className="col-span-10 md:col-span-4 bg-[#F4F4F4] rounded-3xl p-8 shadow-sm">
                    <h2 className={`${styles.heading} text-3xl md:text-4xl mb-4`}>
                        Auto-resolve issues
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Personalized conversations with your customers over chat, email, or calls.
                        Resolve complex issues by taking action.
                    </p>

                    {/* Chat Demo */}
                    <div className="space-y-4">
                        <div className="bg-[#EDEDED] text-[#4143e2] p-4 rounded-[20px] max-w-[80%] text-[15px]">
                            Hi, I was expecting 5x points on my card for my last transaction, but only got 3x.
                        </div>

                        <div className="bg-white border border-gray-200 p-4 rounded-[20px] max-w-[90%] text-[15px] text-gray-800">
                            Hey Rachel, thanks for reaching out! I see that your last transaction was a dining
                            purchase, which qualifies for 5x points, but only for Platinum Status Tier members.
                        </div>

                        <div className="bg-white border border-gray-200 p-4 rounded-[20px] max-w-[80%] text-[15px] text-gray-800">
                            You are currently in the Gold Status Tier, which means you earn 3x points on dining transactions.

                        </div>
                        <button className="mt-[-200px] ml-45 text-sm border-0 border-red-700 bg-orange-600 text-white px-3 py-1 rounded-full inline-flex items-center gap-1.5 hover:bg-orange-100 transition-colors">
                            <Zap className="w-3.5 h-3.5" />
                            Adjust tone
                        </button>


                        <div className="border-0 shadow-2xl m-auto bg-white border-red-700 rounded-[40px] p-1 flex items-center gap-2 md:max-w-[90%]">
                            <div className="bg-white text-[#4143e2] p-4 rounded-[20px] text-[15px] flex-grow">
                                Ok, how do I get to the next tier?
                            </div>
                            <div className="w-10 h-10 bg-[#4143e2] rounded-full flex items-center justify-center text-white hover:bg-[#3638c4] transition-colors cursor-pointer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Card - Seamless integrations */}
                <div className="col-span-10 md:col-span-6 bg-[#F4F4F4] rounded-3xl p-8 shadow-sm">
                    <h2 className={`${styles.heading} text-3xl md:text-4xl mb-4`}>
                        Seamless integrations & workflows
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Zero-lift integrations with your existing knowledge, tools, data sources, and workflows.
                        Build your AI without needing old-fashioned decision trees and canned responses.
                    </p>

                    {/* Integration Diagram */}
                    <div className="relative h-fit flex justify-center ">
                        <Image
                            src={logos}
                            alt='right-box'
                            width={100}
                            height={200}
                            className='w-[600px] rounded-[30px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features 