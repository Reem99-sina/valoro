import Image from "next/image";
import React from "react";

import Transformation from "@/assets/image/transition.png";
import { useTranslation } from "@/translations/clients";
import { Info } from "lucide-react";

const DigitalTransformation = () => {
  const { t } = useTranslation();
  const transformation = [
    {
      title: t("digitalTransformation.about.title"),
      desc: t("digitalTransformation.about.description"),
    },
  ];

  return (
    <section
      id="transformation"
      className=" w-full flex flex-col justify-center  bg-cover min-h-[90vh]"
    >
      <div className="container mx-auto flex items-center gap-5 justify-between">
        <div className="flex flex-col gap-5 flex-1 w-auto">
          <div className="text-center  w-max font-black text-main-light-blue text-4xl">
            <p>{t("digitalTransformation.title")}</p>
          </div>
          <p className="text-main-blue">
            {t("digitalTransformation.subtitle")}
          </p>

          <div className="flex flex-col gap-3 flex-1">
            {transformation?.map((ele, index) => (
              <ul key={index}>
                <div className=" p-4 text-start flex justify-start items-center gap-3">
                  <Info className=" text-main-light-blue" />
                  <p className="text-main-blue font-bold">{ele?.title}</p>
                </div>
                {ele?.desc?.split(".")?.map(
                  (elem, ind) =>
                    elem && (
                      <li className="text-main-blue ml-12" key={ind}>
                        {elem}
                      </li>
                    )
                )}
              </ul>
            ))}
          </div>
        </div>
        <div>
          <Image
            src={Transformation}
            width={400}
            height={200}
            alt="transformation"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
