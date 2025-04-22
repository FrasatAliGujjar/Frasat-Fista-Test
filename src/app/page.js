import React from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Features from "@/components/Features/Features";
import AgentInsights from "@/components/AgentInsights/AgentInsights";
import ROIMetrics from "@/components/ROIMetrics/ROIMetrics";
import TrustedPartners from "@/components/TrustedPartners/TrustedPartners";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import CaseStudyCards from "@/components/CaseStudyCards/CaseStudyCards";
import CompanyCards from "@/components/CompanyCards/CompanyCards";
import HeroSection from "@/components/BottomHero/BottomHero";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <>
      <div className="bg-[#e0e0e0]">
        {/* =========================================== */}
        <Hero />
        <About />
        <Features />
        <AgentInsights />
        <About />
        <ROIMetrics />
        <TrustedPartners />
        <CaseStudies />
        <CaseStudyCards />
        <CompanyCards />
        <HeroSection />
        {/* <Footer /> */}
        {/* =========================================== */}
      </div>
    </>
  );
}
