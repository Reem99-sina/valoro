import Image from "next/image";
import React from "react";

import Transformation from "@/assets/image/transition.png";
import { useTranslation } from "@/translations/clients";
import { Info } from "lucide-react";
import { easeInOut } from "framer-motion";
import { motion } from "framer-motion";

const DigitalTransformation = () => {
  const { t } = useTranslation();
  const transformation = [
    {
      title: t("digitalTransformation.about.title"),
      desc: t("digitalTransformation.about.description"),
    },
  ];
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut },
    },
  };

  return (
    <motion.section
      id="transformation"
      className="w-full flex flex-col justify-center bg-gradient-to-r from-blue-100 via-white to-blue-200 min-h-[90vh] py-12"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
      variants={sectionVariants}
    >
      <div className="container mx-auto flex flex-col gap-5 justify-center text-center">
        <div className="flex flex-col gap-5 flex-1 w-auto bg-opacity-80  p-8">
          <motion.div
            className="text-center font-black text-main-blue text-4xl"
            variants={itemVariants}
          >
            <p>{t("digitalTransformation.title")}</p>
          </motion.div>
          <motion.p className="text-main-blue text-lg" variants={itemVariants}>
            {t("digitalTransformation.subtitle")}
          </motion.p>
        </div>
        <div className="flex  gap-5 items-center flex-wrap md:flex-nowrap">
          <div className="flex flex-col text-justify gap-5 flex-1 w-auto ">
            {transformation?.map((ele, index) => (
              <motion.ul key={index} variants={itemVariants}>
                <div className=" p-4  flex justify-start items-center gap-3">
                  <Info className=" text-main-light-blue animate-bounce" />
                  <p className="text-main-blue font-bold text-lg">{ele?.title}</p>
                </div>
                {ele?.desc?.split(".")?.map(
                  (elem, ind) =>
                    elem && (
                      <li
                        className="text-main-blue ml-12 transition-colors duration-200 hover:text-main-light-blue text-md"
                        key={ind}
                      >
                        {elem}
                      </li>
                    )
                )}
              </motion.ul>
            ))}
          </div>
          <motion.div
            className="flex flex-col gap-5 w-auto items-center justify-center flex-1"
            variants={itemVariants}
          >
            <Image
              src={Transformation}
              width={400}
              height={200}
              alt="transformation"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DigitalTransformation;
