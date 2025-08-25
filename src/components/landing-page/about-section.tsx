import { useTranslation } from "@/translations/clients";

import React from "react";
import { Users, Globe, Building } from "lucide-react";
import { Box, Brain, House, Idea, Money, Network, Reward } from "@/assets/icon";
import { easeInOut, motion } from "framer-motion";
import PartnersSection from "./partners-section";
import { useCounter } from "@/lib/counter";

const AboutSection = () => {
  const { t } = useTranslation();
  const cards = [
    {
      id: 1,
      title: "",
      icon: <Users className="w-12 h-12  mx-auto mb-4" />,
      desc: t("stats.customers"),
      number: "100",
    },
    {
      id: 2,
      title: "",
      icon: <Globe className="w-12 h-12  mx-auto mb-4" />,
      desc: t("stats.countries"),
      number: "10",
    },
    {
      id: 3,
      title: "",
      icon: <Building className="w-12 h-12  mx-auto mb-4" />,
      desc: t("stats.people"),
      number: "1000",
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
    <motion.section
      id="about"
      className="w-full flex flex-col justify-center  min-h-screen py-12 "
      initial="hidden"
      whileInView="visible"
      layoutScroll={true}
      viewport={{ once: true, amount: 0 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-5 flex-1 w-auto items-center justify-center">
          <motion.div
            className="text-[28px] md:text-[40px] font-bold text-third-blue text-center"
            variants={itemVariants}
          >
            <h2>{t("aboutNumberPeople.title")}</h2>
          </motion.div>
          <PartnersSection />
        </div>
        <motion.div
          className="flex justify-center items-start mt-10 max-w-[90vw] mx-auto"
          variants={sectionVariants} // Use sectionVariants for staggered children
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {cards?.map((ele) => (
              <motion.div
                key={ele?.id}
                className={`relative flex flex-col    rounded-xl transition-all duration-300 hover:scale-105 flex-1`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card item={{ value: String(ele?.number), label: ele?.desc }} />
               
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
const Card = ({ item }: { item: { value: string; label: string } }) => {
  const count = useCounter({ targetValue: Number(item.value) });

  return (
    <div className="bg-dark-blue rounded-2xl border border-fifth-blue shadow-lg p-6 text-center text-white w-full h-full flex flex-col justify-center items-center">
      <h4 className="text-[32px] font-bold text-third-blue">{count}</h4>
      <p className="mt-2 text-lg">{item.label}</p>
    </div>
  );
};
