"use client";

import { Header } from "@/components/header";
import AboutSection from "@/components/landing-page/about-section";
import { AiSection } from "@/components/landing-page/ai-section";
import BlockchainSection from "@/components/landing-page/blockchain-section";
// import { BlockchainPlateform } from "@/components/landing-page/blockchainPlatform";
import DigitalTransformation from "@/components/landing-page/digital-transformation";
import FeaturesSection from "@/components/landing-page/features-section";

import IndustrySection from "@/components/landing-page/industry-section";
import MainHeader from "@/components/landing-page/main-header";
import PartnersSection from "@/components/landing-page/partners-section";

import ProjectsSection from "@/components/landing-page/projects-section";
import ServicesSection from "@/components/landing-page/services-section";
import { TechnologySection } from "@/components/landing-page/valoroTechnology";
import Footer from "@/components/shared/footer.component";

// import imageBg from "@/assets/bg.png"

export default function Home() {
  return (
    <div className=" w-full bg-gradient-to-r from-blue-100 via-white to-blue-200">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <div className="bg-[url('/bg-main.jpg')] bg-cover w-full">
          <div className="container mx-auto min-h-screen">
            <Header />
            <MainHeader />
          </div>
        </div>

        <AboutSection />
        <PartnersSection />
        <ProjectsSection />
        <IndustrySection />
        <TechnologySection />

        <ServicesSection />
        <DigitalTransformation />
        <BlockchainSection />
        <FeaturesSection />
        <AiSection />
      </main>
      <Footer />
    </div>
  );
}
