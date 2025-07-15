import { useTranslation } from "@/translations/clients";

import React from "react";

const IndustrySection = () => {
  const { t } = useTranslation();
  const dataIndustry = [
    {
      title: t("industries.education"),
      icon: "🎓",
    },
    {
      title: t("industries.crowdfunding"),
      icon: "💰",
    },
    {
      title: t("industries.fintech"),
      icon: "🏦",
    },
    {
      title: t("industries.government"),
      icon: "🏛️",
    },
    {
      title: t("industries.healthcare"),
      icon: "⚕️",
    },
    {
      title: t("industries.islamicFinance"),
      icon: "🕌",
    },
    {
      title: t("industries.realEstate"),
      icon: "🏛️",
    },
  ];

  return (
    <section
      id="industry"
      className="bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex items-center gap-5 justify-center flex-col ">
        <div className="flex flex-col gap-5 flex-[0.5] w-auto justify-center items-center">
          <div className=" p-4 max-w-lg font-black text-main-light-blue text-2xl text-center">
            <p>{t("featuredIn.subtitle")}</p>
          </div>
          <p className="text-text-blue">{t("featuredIn.description")}</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {dataIndustry?.map((ele, index) => (
            <div
              // className="flex items-center gap-3    rounded-2xl p-8  transition-all duration-300 hover:scale-105 list-disc"
              className="flex items-center space-x-2 bg-main-blue px-2 py-3 rounded-lg shadow-sm  hover:shadow-md transition-shadow"
              key={index}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-r from-main-blue to-main-light-blue  flex items-center justify-center text-white text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                {ele?.icon}
              </div>

              <p className=" font-bold whitespace-nowrap text-xs">{ele?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
