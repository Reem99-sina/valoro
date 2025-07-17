import Image from "next/image";
import React from "react";
import blockchainImage from "@/assets/image/blockchange_project.png";

import { useTranslation } from "@/translations/clients";
import { Award, Info, Target } from "lucide-react";

const BlockchainSection = () => {
  const { t } = useTranslation();
  const blockchainProject = [
    {
      title: t("blockchainProjects.projects.0.name"),
      desc: t("blockchainProjects.projects.0.description"),
    },
    {
      title: t("blockchainProjects.projects.1.name"),
      desc: t("blockchainProjects.projects.1.description"),
    },
    {
      title: t("blockchainProjects.projects.2.name"),
      desc: t("blockchainProjects.projects.2.description"),
    },
    {
      title: t("blockchainProjects.projects.3.name"),
      desc: t("blockchainProjects.projects.3.description"),
    },
    {
      title: t("blockchainProjects.projects.4.name"),
      desc: t("blockchainProjects.projects.4.description"),
    },
  ];
  const blockChainServices = [
    {
      title: t("blockchainProfessionalServices.customerChallenge.title"),
      icon: <Target />,
      desc: [
        t("blockchainProfessionalServices.customerChallenge.challenges.0"),
        t("blockchainProfessionalServices.customerChallenge.challenges.1"),
        t("blockchainProfessionalServices.customerChallenge.challenges.2"),
        t("blockchainProfessionalServices.customerChallenge.challenges.3"),
        t("blockchainProfessionalServices.customerChallenge.challenges.4"),
      ],
    },
    {
      title: t("blockchainProfessionalServices.valoroBenefits.title"),
      icon: <Award />,
      desc: [
        t("blockchainProfessionalServices.valoroBenefits.benefits.0"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.1"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.2"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.3"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.4"),
      ],
    },
  ];

  return (
    <section
      id="blockchain"
      className=" bg-cover w-full  flex flex-col justify-center"
    >
      <div className="container mx-auto ">
        <div className="flex items-center gap-5 justify-center min-h-screen">
          <div className="flex flex-col gap-5 flex-1 w-auto">
            <div className="text-start  w-max font-black text-main-light-blue text-4xl">
              {t("blockchainProjects.title")}
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {blockchainProject?.map((ele, index) => (
                <ul className="list-disc" key={index}>
                  <div className="  text-start flex justify-start items-center gap-3">
                    <Info className=" text-main-light-blue" />
                    <p className="text-main-blue font-bold">{ele?.title}</p>
                  </div>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={blockchainImage}
              width={400}
              height={200}
              alt="blockchainImage"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5  w-auto py-6 min-h-screen items-center justify-center">
          <div className="text-start  w-max font-black text-main-light-blue text-4xl">
            {t("blockchainProfessionalServices.title")}
          </div>
          <div className="flex flex-row gap-5   ">
            {blockChainServices?.map((ele, index) => (
              <ul
                className="bg-main-blue   rounded-2xl p-8  transition-all duration-300 hover:scale-105 list-disc"
                key={index}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-main-blue to-main-light-blue rounded-lg flex items-center justify-center mb-6">
                  {ele?.icon}
                </div>
                <p className=" font-bold text-main-light-blue">{ele?.title}</p>

                {ele?.desc?.map(
                  (elem, index) =>
                    ele && (
                      <li className=" text-sm  ml-4" key={index}>
                        {elem}
                      </li>
                    )
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
