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
import { OverviewProject } from "@/components/landing-page/overview-section";

import ProjectsSection from "@/components/landing-page/projects-section";
import ServicesSection from "@/components/landing-page/services-section";
import { TechnologySection } from "@/components/landing-page/valoroTechnology";

// import imageBg from "@/assets/bg.png"

export default function Home() {
  return (
    <div className=" w-full bg-secondary-light-blue">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <div className="bg-[url('/header.PNG')] bg-cover w-full">
          <div className="container mx-auto">
            <Header />
            <MainHeader />
          </div>
        </div>

        <AboutSection />
        <ProjectsSection />
        <IndustrySection />
        <TechnologySection />

        <ServicesSection />
        <DigitalTransformation />
        <OverviewProject />
        <BlockchainSection />
        <FeaturesSection />
        <AiSection />
      </main>
      <footer className="row-start-3 flex  flex-col items-center justify-around bg-main-blue p-4 text-white">
        <p className="">
          © 2025 Valoro. All rights reserved. Terms and Conditions Privacy
          Policy
        </p>
      </footer>
    </div>
  );
}
