import React from 'react'
import { MessageSquare, Activity, Circle } from 'lucide-react'
import styles from './About.module.css'

const About = () => {
    const features = [
        {
            icon: <Circle className="w-5 h-5 text-green-500" />,
            text: "Always online",
            bgColor: "bg-green-50"
        },
        {
            icon: <MessageSquare className="w-5 h-5 text-blue-500" />,
            text: "Fully generative",
            bgColor: "bg-blue-50"
        },
        {
            icon: <Activity className="w-5 h-5 text-orange-500" />,
            text: "Constantly learning",
            bgColor: "bg-orange-50"
        }
    ]

    return (
        <section className="border-0 border-red-700 mx-auto px-4 py-20">
            {/* Small "About" text */}
            <div className="text-center mb-8">
                <span className="text-gray-600 text-lg">About</span>
            </div>

            {/* Main Heading */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className={`${styles.heading} text-xl md:text-xl lg:text-5xl leading-tight tracking-wide`}>
                    Your customer experience solution for
                    <br className="hidden md:block" />
                    the AI era. Faster. Cheaper. Smarter.
                </h2>
            </div>

            {/* Features */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${feature.bgColor} flex md:hidden m-auto gap-2 w-fit md:w-auto px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md`}
                    >
                        {feature.icon}
                        <span className="text-gray-900 font-medium">
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>


            <div className="flex flex-col md:flex-row justify-center gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${feature.bgColor} hidden md:flex gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md`}
                    >
                        {feature.icon}
                        <span className="text-gray-900 font-medium">
                            {feature.text}
                        </span>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default About 