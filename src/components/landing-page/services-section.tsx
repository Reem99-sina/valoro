import { useTranslation } from "@/translations/clients";
import { Brain, Cpu, Layers } from "lucide-react";

import React from "react";

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("services.digitalTransformation.title"),
      icon: <Cpu className="w-6 h-6 text-white" />,
      desc: t("services.digitalTransformation.description"),
    },
    {
      title: t("services.aiSolutions.title"),
      icon: <Brain className="w-6 h-6 text-white" />,

      desc: t("services.aiSolutions.description"),
    },
    {
      title: t("services.blockchain.title"),
      icon: <Layers className="w-6 h-6 text-white" />,

      desc: t("services.blockchain.description"),
    },
  ];

  return (
    <section
      id="industry"
      className=" bg-cover w-full min-h-[90vh] flex flex-col justify-center"
    >
      <div className="container mx-auto flex items-center gap-5 justify-center flex-col">
        <div className="flex flex-col gap-5 flex-1 w-auto items-center">
          <div className="text-center p-4 w-max font-black text-main-light-blue text-2xl">
            <p>{t("services.title")}</p>
          </div>
          <div className="flex  gap-3 flex-1">
            {services?.map((ele, index) => (
              <ul
                className="bg-main-blue   rounded-2xl p-8  transition-all duration-300 hover:scale-105 list-disc"
                key={index}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-main-blue to-main-light-blue rounded-lg flex items-center justify-center mb-6">
                  {ele?.icon}
                </div>
                <p className=" font-bold text-main-light-blue">{ele?.title}</p>

                {ele?.desc
                  ?.split(".")
                  ?.map(
                    (ele,index) => ele && <li className=" text-sm  ml-4"key={index}>{ele}</li>
                  )}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
