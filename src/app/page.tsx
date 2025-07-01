"use client";

import { Header } from "@/components/header";
import AboutSection from "@/components/landing-page/about-section";
import FeaturesSection from "@/components/landing-page/features-section";
import IndustrySection from "@/components/landing-page/industry-section";
import MainHeader from "@/components/landing-page/main-header";
import PartnersSection from "@/components/landing-page/partners-section";
import ProjectsSection from "@/components/landing-page/projects-section";
import ServicesSection from "@/components/landing-page/services-section";
import { useMainHomeQuery } from "@/services/main-home";

// import imageBg from "@/assets/bg.png"

export default function Home() {
  const { data } = useMainHomeQuery();


  return (
    <div className=" w-full bg-secondary-light-blue">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ">
        <div className="bg-[url('/header.PNG')] bg-cover w-full">
          <div className="container mx-auto">
            <Header />
            <MainHeader
              title={data?.data?.title}
              desc={data?.data?.description}
              cards={data?.data?.kpi?.cards}
            />
          </div>
        </div>

        <AboutSection />
        <PartnersSection />

        <ProjectsSection />
        <FeaturesSection/>
        <IndustrySection />
        <ServicesSection/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
