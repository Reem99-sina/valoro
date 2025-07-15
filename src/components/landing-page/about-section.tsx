
import { useTranslation } from "@/translations/clients";

import React from "react";
import { Users, Globe, Building } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      id: 1,
      title: "",
      icon: <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.customers"),
    },
    {
      id: 2,
      title: "",
      icon: <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.countries"),
    },
    {
      id: 3,
      title: "",
      icon: <Building className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.people"),
    },
  ];

  return (
    <section
      id="about"
      className=" w-full flex flex-col justify-center  bg-cover min-h-[60vh]"
    >
      <div className="container mx-auto ">
        <div className="flex gap-5 w-full">
          {cards?.map((ele) => (
            <div
              className="transition-all duration-300 hover:scale-105  bg-main-dark-blue border border-border-light shadow-lg rounded-lg py-5 px-3 flex flex-col gap-2 items-center flex-1"
              key={ele?.id}
            >
              <div>{ele?.icon}</div>
              <div className=" text-3xl text-white font-black">
                {ele?.desc?.split("+")[0]}
              </div>
              <div className="  text-sm text-main-light-blue font-black">
                {ele?.desc?.split("+")[1]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
