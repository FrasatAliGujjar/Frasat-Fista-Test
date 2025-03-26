import Image from 'next/image'
import React from 'react'
import Logo from '@/app/assets/images/logo/logo.png'
import IconImage from '@/app/assets/images/icons-box.png'
import portion3_part1 from '@/app/assets/images/portion3_part1.png'
import portion3_part2 from '@/app/assets/images/portion3_part2.png'
import portion5 from '@/app/assets/images/portion5.png'
import charts from '@/app/assets/images/charts.png'
import batch from '@/app/assets/images/batch.png'
import { CheckCircle } from "lucide-react";



const Home = () => {


  const topCards = [
    {
      logo: "/duolingo.png",
      title: "Regain lost time and elevate customer experience",
      stat: "80% resolution rate",
      image: "/duolingo-bg.jpg",
    },
    {
      logo: "/rippling.png",
      title: "Solve complex cases",
      stat: "10k businesses supported",
      image: "/rippling-bg.jpg",
    },
  ];

  const bottomCards = [
    {
      logo: "BILT",
      title: "Bilt",
      description:
        "Bilt uses Decagon to automate tickets and free up the team by integrating deeply with internal systems.",
    },
    {
      logo: "/classpass.png",
      title: "ClassPass",
      description:
        "ClassPass's increased deflection rate by 10x and scaled customer chat to 24/7 with Decagon’s AI agents.",
    },
    {
      logo: "/substack.png",
      title: "Substack",
      description:
        "Substack achieved great efficiency while engaging their readers and writers by handling actions and complex workflows.",
    },
  ];



  return (
    <>
      {/* ==========================================================  */}

      <div className="main p-3 md:p-10 bg-white border-0 border-solid border-red-600">
        <div className="box1 h-[auto] bg-black text-white border-2 border-solid border-black rounded-4xl">


          {/* =============================================== */}
          <nav className="bg-black text-white py-4 px-6 flex justify-between rounded-4xl items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src={Logo} alt="Logo" className='w-[200px] h-[50px]' />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-gray-400">Product</a>
              <a href="#" className="hover:text-gray-400">Resources</a>
              <a href="#" className="hover:text-gray-400">Customers</a>
              <a href="#" className="hover:text-gray-400">Careers</a>
            </div>

            {/* Sign-in Button */}
            <button className="border border-gray-500 px-4 py-2 rounded-[200px] hover:bg-gray-800 hidden md:block">
              Sign in
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white focus:outline-none">
              ☰
            </button>
          </nav>
          {/* =============================================== */}





















          {/* =============================================== */}
          <section className="rounded-4xl bg-black text-white min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 py-16">
            {/* Left Section - Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Reimagine your customer service <br /> with
                <span className="text-white"> AI agents.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-400">
                Conversational AI built for safety and scale using Agent Operating Procedures (AOPs).
                Trusted by massive enterprises and top startups.
              </p>
              <div className="mt-6">
                <button className="bg-gradient-to-r from-orange-500 to-purple-500 px-6 py-3 rounded-lg text-white font-semibold">
                  Announcing our $65m Series B
                </button>
              </div>
            </div>


            <div className="md:w-1/2 h-[500px] border-0 border-solid border-red-600 flex justify-center items-center mt-12 md:mt-0 relative overflow-hidden">
              {/* Background Video */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/Prism.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Content Goes Here */}
              <div className="relative z-10 text-white text-xl font-semibold">
                {/* ------------------------------------- */}
                <h1>Hi, can I extend my free trial?</h1>
                <br />
                {/* ------------------------------------- */}
                <div className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/50 backdrop-blur-lg bg-white/10 shadow-md">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-white text-lg font-semibold">Solved in 3 sec</span>
                </div>
                {/* ------------------------------------- */}
              </div>
            </div>


          </section>
          {/* =============================================== */}

        </div>























        <div className="box1 my-5 h-[auto] bg-black text-white border-1 border-solid">



          {/* =============================================== */}
          <section className="bg-gray-100 text-gray-900 py-16 px-6 md:px-20 text-center relative">
            {/* About Heading */}
            <h3 className="text-gray-500 uppercase tracking-wide text-sm">About</h3>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mt-2 leading-tight">
              Your complete solution for the <span className="italic">AI era.</span>
              <br />
              <span className="text-gray-700">Faster. Cheaper. Smarter.</span>
            </h1>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-full text-lg">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Always Online
              </div>
              <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-full text-lg">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                Fully Generative
              </div>
              <div className="flex items-center bg-white shadow-md px-4 py-2 rounded-full text-lg">
                <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                Constantly Learning
              </div>
            </div>

            {/* Decorative Brackets (Optional) */}
            <div className="absolute top-6 left-6 text-purple-500 text-xl">╭</div>
            <div className="absolute top-6 right-6 text-purple-500 text-xl">╮</div>
            <div className="absolute bottom-6 left-6 text-purple-500 text-xl">╰</div>
            <div className="absolute bottom-6 right-6 text-purple-500 text-xl">╯</div>
          </section>
          {/* =============================================== */}



        </div>
























        <div className='my-5'>
          {/* ================================================================= */}
          <section className="bg-gray-100 py-16 px-6 md:px-20">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Auto-resolve Issues Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-semibold text-gray-900">
                  Auto-resolve Issues
                </h2>
                <p className="text-gray-600 mt-2">
                  Personalized end user conversations over chat, email, or calls. Resolve complex issues by taking actions.
                </p>

                {/* Chat Bubble UI */}
                <div className="mt-6 space-y-3">
                  <div className="bg-indigo-200 text-indigo-900 p-3 rounded-lg max-w-md">
                    Hi, I was expecting 5x points on my card for my last transaction, but only got 3x.
                  </div>

                  <div className="bg-gray-100 p-3 rounded-lg shadow max-w-md">
                    Hey Rachel, thanks for reaching out! I see that your last transaction was a dining purchase, which qualifies for 5x points, but only for Platinum Status Tier members.
                  </div>

                  <div className="bg-gray-100 p-3 rounded-lg shadow max-w-md">
                    You are currently in the Gold Status Tier, which means you earn 3x points on dining transactions.
                  </div>

                  {/* Adjust Tone Button */}
                  <button className="bg-orange-500 text-white px-3 py-1 text-sm rounded-full flex items-center">
                    Adjust tone
                  </button>


                  <div className="flex items-center bg-gray-100 p-4 rounded-full w-fit max-w-md shadow-md">
                    {/* Chat Message */}
                    <p className="text-gray-800 text-lg">Ok, how do I get to the next tier?</p>

                    {/* Send Icon */}
                    <div className="ml-3 bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="white"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l18-9-9 9 9 9-18-9z"
                        />
                      </svg>
                    </div>
                  </div>





                </div>
              </div>

              {/* Seamless Integrations & Workflows Section */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-semibold text-gray-900">
                  Seamless Integrations & Workflows
                </h2>
                <p className="text-gray-600 mt-2">
                  Zero-lift integrations with your existing knowledge, tools, data sources, and workflows.
                  Build your AI without needing old-fashioned decision trees and canned responses.
                </p>

                {/* Integration Logos Grid */}
                <div className="relative flex justify-center mt-8">

                  {/* Surrounding Icons */}
                  <div className="image-box">

                    <Image src={IconImage} alt="Logo" className='rounded-[10px] w-[500px] h-[600px]' />

                  </div>

                </div>
              </div>
            </div>
          </section>
          {/* ================================================================= */}
        </div>





















        <div className='my-5'>
          {/* =========================================================================== */}
          <div className="flex justify-center items-center min-h-screen bg-gray-200 p-8">
            {/* Main Container */}
            <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg w-full max-w-5xl">
              {/* Agent Assistance Section */}
              <div className="bg-gray-100 p-6 rounded-lg relative">
                <h2 className="text-2xl font-semibold">Agent Assistance</h2>
                <p className="text-gray-600 mt-2">
                  Supercharge your team with an AI copilot that will do the heavy lifting on mundane tasks and continuously learn from agents.
                </p>

                {/* Floating Actions */}
                <div className="relative flex justify-center items-center mt-6">


                  <Image src={portion3_part1} alt="Logo" className='rounded-[10px] w-[300px] h-[300px]' />


                </div>
              </div>

              {/* AI-powered Insights Section */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold">AI-powered Insights</h2>
                <p className="text-gray-600 mt-2">
                  Identify themes, find anomalies, and unlock your own analyses over your valuable conversations.
                </p>





                {/* Stats Section */}
                <div className="mt-6 bg-white p-4 rounded-lg shadow-md">

                  <Image src={portion3_part2} alt="Logo" className='rounded-[10px] w-[100%] h-[300px]' />

                </div>





              </div>
            </div>
          </div>
          {/* =========================================================================== */}
        </div>



















        <div className='my-5'>
          {/* ====================================================================== */}
          <div className="flex justify-center items-center h-[400px] bg-gray-200 p-8">
            <div className="relative text-center max-w-2xl mx-auto">
              {/* Decorative Borders */}
              <div className="absolute top-0 left-0 text-blue-600 text-xl">╭</div>
              <div className="absolute top-0 right-0 text-blue-600 text-xl">╮</div>
              <div className="absolute bottom-0 left-0 text-blue-600 text-xl">╰</div>
              <div className="absolute bottom-0 right-0 text-blue-600 text-xl">╯</div>

              {/* Heading */}
              <p className="text-gray-500 text-sm mb-2">Why us?</p>
              <h2 className="text-4xl font-serif font-bold text-gray-900">
                Unlike any product <br /> you've used before.
              </h2>

              {/* Feature Buttons */}
              <div className="flex justify-center mt-6 space-x-4">
                {/* First Button */}
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border">
                  <span className="text-lg">📊</span>
                  <span className="text-gray-800 text-sm font-medium">Powerful Analytics</span>
                </div>

                {/* Second Button */}
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border">
                  <span className="text-lg">💻</span>
                  <span className="text-gray-800 text-sm font-medium">No Engineering Lift</span>
                </div>

                {/* Third Button */}
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md border">
                  <span className="text-lg">⚙️</span>
                  <span className="text-gray-800 text-sm font-medium">It Just Works</span>
                </div>
              </div>
            </div>
          </div>
          {/* ====================================================================== */}
        </div>


























        <div className='my-5'>
          {/* =============================================================================== */}
          <div className="bg-gray-100 p-10 rounded-lg max-w-6xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-2">
              Instant ROI on the metrics that matter
            </h2>
            <p className="text-gray-500 mb-6">
              Turn your support operation into a growth driver and scale revenue without scaling headcount.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Chart Section (Replaced with Image) */}
              <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-2/3 relative">
                <div className="absolute top-3 left-3 bg-white p-3 shadow rounded-lg">
                  <h3 className="text-lg text-gray-600 font-medium">March <span className="text-gray-400">2025</span></h3>
                  <p className="text-blue-600 text-sm">⬛ Tickets resolved</p>
                  <p className="text-red-600 text-sm">⬤ Average CSAT</p>
                </div>

                <Image src={charts} alt="Logo" className='rounded-[10px] w-[100%] h-[300px]' />


              </div>

              {/* Testimonial Section */}
              <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
                <p className="text-gray-600 italic">
                  "Decagon is the reason we can maintain operational excellence in customer support as our user base grows rapidly.
                  It provides extremely accurate and nuanced answers and is easily trained to keep up with our rapidly changing product,
                  mitigating the need to add dozens of support headcount."
                </p>
                <p className="text-gray-800 font-semibold mt-4">Ethan Yu</p>
                <p className="text-gray-500 text-sm">COO at Motion</p>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                  <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                  <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
          {/* =============================================================================== */}
        </div>






















        <div className='my-5'>
          {/* ============================================================= */}

          <Image src={portion5} alt="Logo" className='rounded-[10px] w-[100%] h-[300px]' />

          {/* ============================================================= */}
        </div>

















































        <div className="main-boxes mt-5">
          {/* =============================================================== */}
          <div className="bg-black rounded-4xl text-white py-10 px-6" style={{ backgroundImage: "url('/your-image.jpg')" }}>
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-4">
              {topCards.map((card, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden group"
                >
                  <Image
                    // src={card.image}
                    src="/meeting.png"
                    alt={card.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                    {/* <Image
                      src="/meeting2.jpeg"
                      alt="logo" width={120} height={40} /> */}
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-sm opacity-80">{card.stat}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="grid md:grid-cols-3 gap-4 mt-6"  >
              {
                bottomCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 p-6 h-[300px] rounded-lg border border-gray-700"
                    style={{ backgroundImage: "url('/graph.png')" }}
                  >
                    {typeof card.logo === "string" && card.logo.startsWith("/") ? (
                      <Image
                        src="/main-icon-1.png"
                        alt={card.title}
                        width={100}
                        height={40}
                        className="mb-4"
                      />
                    ) : (
                      <Image
                        src="/main-icon-1.png"
                        alt={card.title}
                        width={100}
                        height={40}
                        className="mb-4"
                      />
                    )}
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-sm opacity-80">{card.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
          {/* =============================================================== */}
        </div>


































      </div >







      <div>
        {/* ============================================================================== */}

        <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white px-6">
          {/* Background Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-[#8b2a07] to-[#160c3c]"></div>

          {/* Floating Elements (Decorative) */}
          <div className="absolute top-10 left-10 w-6 h-6 border border-gray-500 rounded-sm opacity-50"></div>
          <div className="absolute top-10 right-10 w-6 h-6 border border-gray-500 rounded-sm opacity-50"></div>
          <div className="absolute bottom-20 right-20 text-gray-500 text-xl">+</div>
          <div className="absolute bottom-20 left-20 text-gray-500 text-xl">+</div>

          {/* Main Content */}
          <p className="text-gray-400 text-sm uppercase tracking-wide">Book a demo</p>
          <h1 className="text-5xl md:text-6xl font-serif text-center mt-4">
            The future of customer experience starts here.
          </h1>

          {/* Email Input with Glassmorphism */}
          <div className="relative mt-10 w-full max-w-lg">
            <input
              type="email"
              placeholder="Your business email"
              className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-300 placeholder-gray-400 rounded-full px-6 py-4 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-[100%] transition">
              ➜
            </button>
          </div>

          {/* Floating 3D Element (Placeholder for Image) */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full opacity-80"></div>
        </div>


        {/* ============================================================================== */}
      </div>










































      {/* //Fotter */}
      < div className='my-5' >
        <footer className="bg-black text-white py-10 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Left Section - Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start">

              <Image src={Logo} alt="Logo" className='rounded-[10px] w-[100px] h-[100px]' />

              <p className="text-gray-400">© 2025 Decagon. All rights reserved.</p>
            </div>

            {/* Middle Section - Links */}
            <div className="flex flex-col md:flex-row gap-10 text-center md:text-left mt-6 md:mt-0">
              {/* Company Links */}
              <div>
                <h3 className="text-gray-300 font-semibold mb-2">Company</h3>
                <ul className="text-gray-400 space-y-1">
                  <li><a href="#" className="hover:text-gray-200">Resources</a></li>
                  <li><a href="#" className="hover:text-gray-200">Security</a></li>
                  <li><a href="#" className="hover:text-gray-200">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-gray-200">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-gray-200">Cookie Settings</a></li>
                  <li><a href="#" className="hover:text-gray-200">Docs</a></li>
                </ul>
              </div>

              {/* Contact Links */}
              <div>
                <h3 className="text-gray-300 font-semibold mb-2">Contact</h3>
                <ul className="text-gray-400 space-y-1">
                  <li><a href="#" className="hover:text-gray-200">Sales</a></li>
                  <li><a href="#" className="hover:text-gray-200">Support</a></li>
                  <li><a href="#" className="hover:text-gray-200">Join us!</a></li>
                </ul>
              </div>
            </div>

            {/* Right Section - Badge & Social Icons */}
            <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
              {/* SOC 2 Type II Badge */}

              <Image src={batch} alt="Logo" className='rounded-[10px] w-[100px] h-[100px]' />

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80">
                  <img src="/x-icon.png" alt="Twitter/X" className="h-6" />
                </a>
                <a href="#" className="hover:opacity-80">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div >



      {/* ==========================================================  */}
    </>
  )
}

export default Home
