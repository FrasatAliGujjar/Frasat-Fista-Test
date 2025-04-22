'use client'

import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { useState } from 'react'

const SemiCircleChart = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const data = [
        { name: 'Active', value: 35, hoverColor: '#5558ff' },
        { name: 'Segment1', value: 25, hoverColor: '#f0f0f0' },
        { name: 'Segment2', value: 40, hoverColor: '#c0c0c0' },
    ]

    const COLORS = ['#4143e2', '#E2E2E2', '#D1D1D1']

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 rounded-lg shadow-md border border-gray-200">
                    <p className="text-sm font-medium">
                        {payload[0].name}: {payload[0].value}%
                    </p>
                </div>
            )
        }
        return null
    }

    const onMouseEnter = (_, index) => {
        setActiveIndex(index)
    }

    const onMouseLeave = () => {
        setActiveIndex(null)
    }

    return (
        <div className="mt-4 -mb-[100px] -mx-8">
            <PieChart width={500} height={300}>
                <Tooltip content={<CustomTooltip />} />
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={0}
                    dataKey="value"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={activeIndex === index ? entry.hoverColor : COLORS[index]}
                            strokeWidth={0}
                            style={{ transition: 'fill 0.3s ease' }}
                        />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default SemiCircleChart 