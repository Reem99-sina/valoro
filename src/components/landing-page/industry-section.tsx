import { useTranslation } from "@/translations/clients";

import React from "react";

const IndustrySection = () => {
  const { t } = useTranslation();
  const dataIndustry = [
    {
      title: t("industries.education"),
      icon: "🎓",
      position: { top: "10%", left: "16%" },
    },
    {
      title: t("industries.crowdfunding"),
      icon: "💰",
      position: { top: "35%", left: "5%" },
    },
    {
      title: t("industries.fintech"),
      icon: "🏦",
      position: { top: "35%", left: "32%" },
    },
    {
      title: t("industries.government"),
      icon: "🏛️",
      position: { top: "56%", left: "48%" },
    },
    {
      title: t("industries.healthcare"),
      icon: "⚕️",
      position: { top: "10%", right: "20%" },
    },
    {
      title: t("industries.islamicFinance"),
      icon: "🕌",
      position: { top: "35%", right: "10%" },
    },
    {
      title: t("industries.realEstate"),
      icon: "🏛️",
      position: { top: "35%", right: "34%" },
    },
  ];

  return (
    <section
      id="industry"
      className="bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex items-center gap-5 justify-center flex-col ">
        <div className="flex flex-col gap-5 flex-[0.5] w-auto justify-center items-center">
          <div className=" font-black text-main-light-blue text-4xl text-center ">
            <p>{t("featuredIn.subtitle")}</p>
          </div>
          <p className="text-text-blue text-lg text-center">
            {t("featuredIn.description")}
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center items-center gap-8 w-full min-h-[50vh] bg-[url('/tech.png')] bg-cover">
          {dataIndustry?.map((ele) => (
            <div
              key={ele?.title}
              className="absolute flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 hover:scale-110 z-10 bg-main-dark-blue border border-border-light"
              style={{
                top: ele.position.top,
                left: ele.position.left,
                right: ele.position.right,
                transform: ele.position.left
                  ? "translateX(-50%)"
                  : ele.position.right
                    ? "translateX(50%)"
                    : "",
                width: "140px", // Fixed width for consistency
                height: "70px", // Fixed height for consistency
              }}
            >
              <div
                className={`w-10 h-10 rounded-lg bg-gradient-to-r from-main-blue to-main-light-blue  flex items-center justify-center text-white text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                {ele?.icon}
              </div>

              <p className=" font-bold whitespace-nowrap text-xs">
                {ele?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
