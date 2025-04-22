import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/hero/logo.png"
import slider from "@/assets/hero/slider2.png"
import girl from "@/assets/hero/girl.png"
import Style from "./Hero.module.css"
import MarqueeSlider from "@/components/MarqueeSlider/MarqueeSlider"

const Hero = () => {
    return (
        <>
            <div className="flex justify-center md:p-1">
                {/* =============================================================  */}
                <div className="min-h-screen w-full md:rounded-[30px] bg-black text-white">

                    {/* Hero Section */}
                    <section className="container mx-auto md:px-4 py-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Left Column - Text Content */}
                            <div className="p-10 border-0 border-solid border-red-500">
                                <h1 className={`${Style.hero} text-2xl md:text-6xl lg:text-5xl font-serif leading-tight`}>
                                    Redefine customer 
                                    <br/> experience with AI agents.
                                </h1>
                                <p className="mt-4 text-lg max-w-xl">
                                    Decagon is the conversational AI platform that transforms customer interactions with AI agents. Seamlessly
                                    build, manage, and scale AI agents with Agent Operating Procedures (AOPs).
                                </p>
                                <div className="flex mt-8 items-center gap-4">
                                    <Link
                                        href="/demo"
                                        className="inline-flex items-center px-6 py-3 bg-[#6366F1] text-white rounded-full hover:bg-[#5558E6] transition-all duration-300 group"
                                    >
                                        <span className="font-medium">Get a demo</span>
                                        <div className="ml-4 w-8 h-8 rounded-full  flex items-center justify-center group-hover:bg-white/30">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    <Link
                                        href="/watch"
                                        className="inline-flex items-center text-[#6366F1] hover:text-[#5558E6] transition-all duration-300 group"
                                    >
                                        <span className="font-medium">Watch video</span>
                                        <div className="ml-2 flex items-center">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column - Chat Demo */}
                            <div className="relative mt-[-40px] md:rounded-3xl overflow-hidden bg-sky-100">
                                <div className="aspect-[3/4] md:aspect-auto md:h-[600px] relative">
                                    <Image
                                        src={girl}
                                        alt="Person smiling with AI chat interface"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Partner Logos */}
                    {/* <section className="container border-0 border-solid border-red-500 mx-auto px-4 py-4 mt-8 overflow-hidden">
                        <div className={`${Style.marquee} flex items-center`}>
                            <Image
                                src={slider}
                                width={50}
                                height={50}
                                alt="Decagon Logo"
                                className="w-full h-[60px] object-contain"
                                quality={100}
                                priority
                            />
                           
                        </div>
                    </section> */}

                    <MarqueeSlider />
                </div>
                {/* =============================================================  */}
            </div>
        </>
    )
}

export default Hero
