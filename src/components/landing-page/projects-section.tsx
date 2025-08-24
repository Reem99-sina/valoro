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
import { easeInOut } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projectLogo = [
    { id: 1, icon: <Sdaia  />, position: { top: "10%", left: "16%" } },
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
  const leftLogos = projectLogo.filter(
    (logo) => logo.position.left !== undefined
  );
  const rightLogos = projectLogo.filter(
    (logo) => logo.position.right !== undefined
  );
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: easeInOut },
    },
  };

  return (
    <motion.section
      id="project"
      className="relative w-full min-h-screen flex flex-col justify-center py-12"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto flex flex-col items-center gap-5 justify-center">
        {/* العنوان والوصف */}
        <div className="flex flex-col gap-5 flex-1 w-auto items-center justify-center">
          <motion.div
            className="text-[28px] md:text-[40px] font-bold text-third-blue text-center"
            variants={itemVariants}
          >
            <p>{t("partners.subtitle")}</p>
          </motion.div>
          <motion.p
            className="text-white text-lg text-center md:max-w-2xl"
            variants={itemVariants}
          >
            {t("partners.description")}
          </motion.p>
        </div>

        {/* الشبكة الرئيسية */}
        <div className="flex  gap-6 items-center justify-around w-full px-6 py-12 bg-[url('/tech.png')] bg-cover rounded-2xl bg-center">
          {/* العمود الأول */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6">
            {leftLogos.map((logo, i) => (
              <motion.div
                key={i}
                variants={logoVariants}
                className={clsx("bg-white p-2 rounded flex items-center justify-center",i==leftLogos.length-1&&'md:col-start-2')}
                whileHover={{ scale: 1.1 }}
              >
                {logo.icon}
              </motion.div>
            ))}
          </div>

          {/* المنتصف (رمز V) */}
          <div className="hidden sm:flex justify-center">
            <V />
          </div>

          {/* العمود الثالث */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6">
            {rightLogos.map((logo, i) => (
              <motion.div
                key={i}
                variants={logoVariants}
                className={clsx("bg-white p-2 rounded flex items-center justify-center",i==rightLogos.length-1&&'md:col-start-2')}
                whileHover={{ scale: 1.1 }}
              >
                {logo.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
