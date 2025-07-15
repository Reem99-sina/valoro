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
  Yallagive,
} from "@/assets/icon";

import { useTranslation } from "@/translations/clients";
import clsx from "clsx";

import React from "react";
import Slider, { Settings } from "react-slick";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    rows: 3,

    responsive: [
      {
        breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const projectLogo = [
    { id: 1, icon: <Sdaia /> },
    { id: 2, icon: <Assay /> },
    {
      id: 3,
      icon: <Dj />,
    },
    {
      id: 4,
      icon: <Saudi />,
    },
    {
      id: 5,
      icon: <P2 />,
    },
    {
      id: 6,
      icon: <Intercom />,
    },
    {
      id: 7,
      icon: <Taibah />,
    },
    {
      id: 8,
      icon: <Ibm />,
    },
    {
      id: 9,
      icon: <Bilol />,
    },
    {
      id: 10,
      icon: <OQ />,
    },
    {
      id: 11,
      icon: <Ataa />,
    },
    {
      id: 12,
      icon: <Imam />,
    },
    {
      id: 13,
      icon: <Yallagive />,
    },
    {
      id: 14,
      icon: <Bokra />,
    },
  ];

  return (
    <section
      id="project"
      className=" bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex flex-col items-center gap-5 justify-center">
        <div className="flex flex-col gap-5 flex-1 w-auto items-center justify-center">
          <div className="p-4 w-max font-black text-main-light-blue text-2xl">
            <p>{t("partners.subtitle")}</p>
          </div>
          <p className="text-text-blue">{t("partners.description")}</p>
        </div>
        <div className="flex justify-center items-start px-6 mt-10 max-w-[90vw] ">
          <Slider {...settings} className="max-w-full">
            {projectLogo?.map((ele, index) => (
              <div
                className={clsx(
                  " p-4 shadow-2xl h-32 !flex justify-center items-center text-white mx-5"
                )}
                key={ele?.id}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {ele?.icon}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
