import {
  Assay,
  Ataa,
  Bilol,
  Bokra,
  Dj,
  Ibm,
  Imam,
  Intercom,
  OQ,
  P2,
  Saudi,
  Sdaia,
  Taibah,
  V,
  Yallagive,
} from "@/assets/icon";
import { useTranslation } from "@/translations/clients";
import React from "react";


const ProjectsSection = () => {
  const { t } = useTranslation();

  const projectLogo = [
    { id: 1, icon: <Sdaia />, position: { top: "10%", left: "16%" } },
    { id: 2, icon: <Assay />, position: { top: "35%", left: "5%" } },
    {
      id: 3,
      icon: <Dj />,
      position: { top: "35%", left: "25%" },
    },
    {
      id: 4,
      icon: <Saudi />,
      position: { top: "65%", left: "5%" },
    },
    {
      id: 5,
      icon: <P2 />,
      position: { top: "50%", left: "16%" },
    },
    {
      id: 6,
      icon: <Intercom />,
      position: { top: "70%", left: "25%" },
    },
    {
      id: 7,
      icon: <Taibah />,
      position: { top: "80%", left: "16%" },
    },
    {
      id: 8,
      icon: <Ibm />,
      position: { top: "20%", right: "15%" },
    },
    {
      id: 9,
      icon: <Bilol />,
      position: { top: "35%", right: "30%" },
    },
    {
      id: 10,
      icon: <OQ />,
      position: { top: "35%", right: "5%" }, // Adjusted position
    },
    {
      id: 11,
      icon: <Ataa />,
      position: { top: "50%", right: "16%" }, // Adjusted position
    },
    {
      id: 12,
      icon: <Imam />,
      position: { top: "65%", right: "3%" }, // Adjusted position
    },
    {
      id: 13,
      icon: <Yallagive />,
      position: { top: "65%", right: "29%" }, // Adjusted position
    },
    {
      id: 14,
      icon: <Bokra />,
      position: { top: "80%", right: "16%" }, // Adjusted position
    },
  ];

  return (
    <section
      id="project"
      className="relative bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex flex-col items-center gap-5 justify-center">
        <div className="flex flex-col gap-5 flex-1 w-auto items-center justify-center">
          <div className="p-4 w-max font-black text-main-light-blue text-4xl">
            <p>{t("partners.subtitle")}</p>
          </div>
          <p className="text-text-blue text-base text-center">
            {t("partners.description")}
          </p>
        </div>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 flex flex-col items-center ">
          <V />
        </div>
        <div className="relative flex justify-center items-start px-6 w-full min-h-[50vh] bg-[url('/tech.png')] bg-cover">
       
          {projectLogo?.map((ele) => (
            <a
              key={ele.id}
              className="absolute flex flex-col items-center text-center p-2 rounded-lg transition-all duration-300 hover:scale-110 z-10"
              style={{
                top: ele.position.top,
                left: ele.position.left,
                right: ele.position.right,
                transform: ele.position.left
                  ? "translateX(-50%)"
                  : ele.position.right
                    ? "translateX(50%)"
                    : "",
                width: "120px", // Fixed width for consistency
              }}
            >
              {ele?.icon}
            </a>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
