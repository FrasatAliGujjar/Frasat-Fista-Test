"use client"

import React from 'react'
import { Zap, Star } from 'lucide-react'
import styles from './AgentInsights.module.css'
import left from '@/assets/AgentInsights/left3.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import the client component with no SSR
const SemiCircleChart = dynamic(() => import('./SemiCircleChart'), {
    ssr: false,
})

const AgentInsights = () => {
    return (
        <section className="border-0 border-red-700 mx-auto px-4 md:py-20">
            <div className="grid grid-cols-10 gap-6">
                {/* Left Card - Agent Assistance */}
                <div className="col-span-10 md:col-span-6 bg-[#FAFAFA] rounded-[32px] p-8 md:p-10 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className={`${styles.heading} text-3xl md:text-4xl mb-4`}>
                            Agent assistance
                        </h2>
                        <p className="text-gray-600 text-lg mb-12">
                            Supercharge your team with an AI copilot that will do the heavy lifting on mundane tasks
                            and continuously learn from agents.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Image
                                src={left}
                                alt='right-box'
                                width={100}
                                height={200}
                                className='h-full w-full rounded-[30px]'
                            />
                        </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,#f1f3f9_1.95px,transparent_1.95px)] bg-[length:16px_16px]"></div>
                </div>

                {/* Right Card - AI Insights */}
                <div className="col-span-10 md:col-span-4 h-full bg-[#FAFAFA] rounded-[32px] p-8 md:p-10 shadow-sm">
                    <h2 className={`${styles.heading} text-3xl md:text-4xl mb-4`}>
                        AI-powered insights
                    </h2>
                    <p className="text-gray-600 text-lg mb-12">
                        Identify themes, find anomalies, and unlock valuable
                        insights across all your conversations.
                    </p>

                    {/* Stats Display */}
                    <div className="bg-gray-50 rounded-[24px] p-8">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-600 text-lg">Subscriptions</div>
                            <div className="flex items-center gap-4">
                                <span className="text-black font-medium text-lg">16%</span>
                                <span className="text-red-500 flex items-center gap-1">
                                    <span className="text-lg">▼</span>
                                    <span className="text-lg">3%</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>category</span>
                            <div className="flex items-center gap-4">
                                <span>12,540 tickets</span>
                                <span>monthly</span>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            {/* Semi-circle Progress Chart */}
                            <SemiCircleChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgentInsights 