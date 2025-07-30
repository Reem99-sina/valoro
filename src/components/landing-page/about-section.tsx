import { useTranslation } from "@/translations/clients";

import React from "react";
import { Users, Globe, Building } from "lucide-react";
import { Box, Brain, House, Idea, Money, Network, Reward } from "@/assets/icon";
import PartnersSection from "./partners-section";
import { easeInOut, motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      id: 1,
      title: "",
      icon: <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.customers"),
      number: "100+",
    },
    {
      id: 2,
      title: "",
      icon: <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.countries"),
      number: "100+",
    },
    {
      id: 3,
      title: "",
      icon: <Building className="w-12 h-12 text-cyan-400 mx-auto mb-4" />,
      desc: t("stats.people"),
      number: "100+",
    },
    {
      id: 4,
      title: "",
      icon: <Brain className=" text-white mx-auto mb-4" />,
      desc: t("overview.noofaiprojects"),
      number: 6,
    },
    {
      id: 5,
      title: "",
      icon: <Box className=" text-white mx-auto mb-4" />,
      desc: t("overview.noofblockchainprojects"),
      number: 8,
    },
    {
      id: 6,
      title: "",
      icon: <House className=" text-white mx-auto mb-4" />,
      desc: t("overview.realestate"),
      number: 3,
    },
    {
      id: 7,
      title: "",
      icon: <Network className=" text-white mx-auto mb-4" />,
      desc: t("overview.digitaltransformation"),
      number: 5,
    },
    {
      id: 8,
      title: "",
      icon: <Idea className=" text-white mx-auto mb-4" />,
      desc: t("overview.intellectualproperty"),
      number: 2,
    },
    {
      id: 9,
      title: "",
      icon: <Money className=" text-white mx-auto mb-4" />,
      desc: t("overview.fintech"),
      number: 1,
    },
    {
      id: 10,
      title: "",
      icon: <Reward className=" text-white mx-auto mb-4" />,
      desc: t("overview.education"),
      number: 3,
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
    <section
      id="about"
      className=" w-full flex flex-col justify-center  bg-cover min-h-screen"
    >
      <motion.section
        id="about"
        className="w-full flex flex-col justify-center  min-h-screen py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto ">
          <div className="flex flex-col gap-5 flex-1 w-auto items-center justify-center">
            <motion.div
              className="p-4 font-black text-main-light-blue text-4xl text-center"
              variants={itemVariants}
            >
              <p>{t("aboutNumberPeople.title")}</p>
            </motion.div>
            <motion.p
              className="text-text-blue text-base text-center max-w-2xl"
              variants={itemVariants}
            >
              {t("aboutNumberPeople.desc")}
            </motion.p>
          </div>
          <motion.div
            className="flex justify-center items-start mt-10 max-w-[90vw] mx-auto"
            variants={sectionVariants} // Use sectionVariants for staggered children
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {cards?.map((ele) => (
                <motion.div
                  key={ele?.id}
                  className={`relative flex flex-col items-center justify-center p-6 rounded-xl bg-main-blue shadow-md transition-all duration-300 hover:scale-105 flex-1`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div>{ele?.icon}</div>
                  <div className=" text-3xl text-white font-black text-center">
                    {ele?.number}
                  </div>
                  <div className="  text-sm text-main-light-blue font-black text-center">
                    {ele?.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default AboutSection;
