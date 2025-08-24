import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import { easeInOut } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";

const IndustrySection = () => {
  const { t } = useTranslation();
  const dataIndustry = [
    {
      title: t("industries.education"),
    },
    {
      title: t("industries.crowdfunding"),
    },
    {
      title: t("industries.fintech"),
    },
    {
      title: t("industries.government"),
    },
    {
      title: t("industries.healthcare"),
    },
    {
      title: t("industries.islamicFinance"),
    },
    {
      title: t("industries.realEstate"),
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <motion.section
      id="featured-in" 
      className="relative  w-full min-h-screen flex flex-col justify-center py-12"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
      variants={sectionVariants}
    >
      <div className="container mx-auto flex items-center gap-5 justify-center flex-col ">
        <div className="flex flex-col gap-5 flex-[0.5] w-auto justify-center items-center">
          <motion.div
            className="text-[28px] md:text-[40px] font-bold text-third-blue text-center"
            variants={itemVariants}
          >
            <p>{t("featuredIn.subtitle")}</p>
          </motion.div>
          <motion.p
            className="text-white text-lg text-center md:max-w-2xl"
            variants={itemVariants}
          >
            {t("featuredIn.description")}
          </motion.p>
        </div>
        <div className="bg-[url('/tech.png')] bg-cover w-full h-full bg-center">
          <div className="p-4 rounded-xl transition-all duration-300 hover:scale-105 z-10  gap-3    flex flex-col items-center justify-center">
            {dataIndustry?.map((ele, index) => (
              <motion.div
                key={ele?.title}
                className={clsx(
                  " p-2 rounded-lg transition-all duration-300 hover:scale-110 z-10 bg-white gap-3 shadow-lg",
                  index === 0
                    ? "col-start-2 col-span-1"
                    : index % 2 == 0
                      ? "col-span-1"
                      : "col-span-1"
                )}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className=" font-bold whitespace-nowrap text-sm text-main-blue">
                  {ele?.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IndustrySection;
