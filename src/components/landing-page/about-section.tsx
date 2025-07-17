import { useTranslation } from "@/translations/clients";

import React from "react";
import { Users, Globe, Building } from "lucide-react";
import { Box, Brain, House, Idea, Money, Network, Reward } from "@/assets/icon";
import PartnersSection from "./partners-section";

const AboutSection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      id: 1,
      title: "",
      icon: <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.customers"),
      number: "100+",
    },
    {
      id: 2,
      title: "",
      icon: <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.countries"),
      number: "100+",
    },
    {
      id: 3,
      title: "",
      icon: <Building className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.people"),
      number: "100+",
    },
    {
      id: 4,
      title: "",
      icon: <Brain className=" text-white mx-auto mb-4" />,
      desc: t("overview.noofaiprojects"),
      number: 6,
    },
    {
      id: 5,
      title: "",
      icon: <Box className=" text-white mx-auto mb-4" />,
      desc: t("overview.noofblockchainprojects"),
      number: 8,
    },
    {
      id: 6,
      title: "",
      icon: <House className=" text-white mx-auto mb-4" />,
      desc: t("overview.realestate"),
      number: 3,
    },
    {
      id: 7,
      title: "",
      icon: <Network className=" text-white mx-auto mb-4" />,
      desc: t("overview.digitaltransformation"),
      number: 5,
    },
    {
      id: 8,
      title: "",
      icon: <Idea className=" text-white mx-auto mb-4" />,
      desc: t("overview.intellectualproperty"),
      number: 2,
    },
    {
      id: 9,
      title: "",
      icon: <Money className=" text-white mx-auto mb-4" />,
      desc: t("overview.fintech"),
      number: 1,
    },
    {
      id: 10,
      title: "",
      icon: <Reward className=" text-white mx-auto mb-4" />,
      desc: t("overview.education"),
      number: 3,
    },
  ];

  return (
    <section
      id="about"
      className=" w-full flex flex-col justify-center  bg-cover min-h-screen"
    >
      <div className="container mx-auto ">
        <PartnersSection />
        <div className="flex justify-center items-start  mt-10 max-w-[90vw] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cards?.map((ele) => (
              <div
                key={ele?.id}
                className={`relative flex flex-col items-center justify-center p-6 rounded-xl  bg-main-blue shadow-md transition-all duration-300 hover:scale-105 
                ${ele?.id % 3 == 0 ? "col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2" : "col-span-1"}
              `}
              >
                <div>{ele?.icon}</div>
                <div className=" text-3xl text-white font-black text-center">
                  {ele?.number}
                </div>
                <div className="  text-sm text-main-light-blue font-black text-center">
                  {ele?.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
