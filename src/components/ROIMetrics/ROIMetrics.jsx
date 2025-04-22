'use client'

import React from 'react'
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, ResponsiveContainer } from 'recharts'

const ROIMetrics = () => {
    const data = [
        { name: 'Week 1', tickets: 320, csat: 82 },
        { name: 'Week 2', tickets: 380, csat: 84 },
        { name: 'Week 3', tickets: 420, csat: 83 },
        { name: 'Week 4', tickets: 450, csat: 85 },
        { name: 'Week 5', tickets: 380, csat: 86 },
        { name: 'Week 6', tickets: 340, csat: 84 },
        { name: 'Week 7', tickets: 360, csat: 85 },
        { name: 'Week 8', tickets: 420, csat: 87 },
        { name: 'Week 9', tickets: 380, csat: 86 },
        { name: 'Week 10', tickets: 520, csat: 88 },
        { name: 'Week 11', tickets: 480, csat: 89 },
        { name: 'Week 12', tickets: 450, csat: 90 }
    ]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 rounded-lg shadow-lg">
                    <p className="text-sm text-gray-600 mb-1">{payload[0].payload.name}</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm">
                            <span className="text-indigo-600 font-medium">
                                {payload[0].value} tickets resolved
                            </span>
                        </p>
                        <p className="text-sm">
                            <span className="text-orange-500 font-medium">
                                {payload[1].value}% CSAT
                            </span>
                        </p>
                    </div>
                </div>
            )
        }
        return null
    }

    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-12 gap-8">
                {/* Chart Column */}
                <div className="md:col-span-8">
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h1 className="font-serif font-medium text-4xl md:text-[42px] leading-tight mb-4 text-gray-900">
                            Instant ROI on the metrics that matter
                        </h1>
                        <p className="text-gray-600 text-lg mb-12">
                            Turn your support operation into a growth driver and scale revenue without scaling headcount.
                        </p>

                        {/* Chart Header */}
                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <h3 className="text-2xl font-serif font-medium text-gray-900">
                                February <span className="text-gray-400">2026</span>
                            </h3>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
                                    <span className="text-gray-600">Tickets resolved</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <span className="text-gray-600">Average CSAT</span>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                    />
                                    <YAxis
                                        yAxisId="left"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                    />
                                    <YAxis
                                        yAxisId="right"
                                        orientation="right"
                                        domain={[60, 100]}
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#6B7280', fontSize: 12 }}
                                    />
                                    <Tooltip
                                        content={<CustomTooltip />}
                                        cursor={{ fill: 'transparent' }}
                                    />
                                    <Bar
                                        dataKey="tickets"
                                        yAxisId="left"
                                        fill="#818CF8"
                                        radius={[4, 4, 0, 0]}
                                        barSize={40}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="csat"
                                        yAxisId="right"
                                        stroke="#FF6B00"
                                        strokeWidth={2}
                                        dot={{ fill: '#FF6B00', r: 4 }}
                                        activeDot={{ r: 6, fill: '#FF6B00' }}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Testimonial Column */}
                <div className="md:col-span-4">
                    <div className="bg-gray-50 h-full rounded-3xl p-8">
                        <blockquote>
                            <p className="text-gray-800 text-lg leading-relaxed mb-8">
                                "Working with Decagon has been nothing short of phenomenal. The team has taken our extremely complicated data and created a tool that allows our customers to seamlessly receive help across our business."
                            </p>
                            <footer>
                                <p className="text-xl font-serif font-medium text-gray-900">
                                    Thatcher Foster
                                </p>
                                <p className="text-gray-600">
                                    VP Client Solutions at Bilt
                                </p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ROIMetrics
