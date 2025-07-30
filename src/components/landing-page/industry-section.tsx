import { useTranslation } from "@/translations/clients";
import { easeInOut } from "framer-motion";
import { motion } from "framer-motion"
import React from "react";

const IndustrySection = () => {
  const { t } = useTranslation();
  const dataIndustry = [
    {
      title: t("industries.education"),
      
      position: { top: "10%", left: "16%" },
    },
    {
      title: t("industries.crowdfunding"),
      
      position: { top: "35%", left: "5%" },
    },
    {
      title: t("industries.fintech"),
      
      position: { top: "35%", left: "32%" },
    },
    {
      title: t("industries.government"),
      
      position: { top: "10%", left: "43%" },
    },
    {
      title: t("industries.healthcare"),
      
      position: { top: "10%", right: "20%" },
    },
    {
      title: t("industries.islamicFinance"),
      
      position: { top: "35%", right: "10%" },
    },
    {
      title: t("industries.realEstate"),
      
      position: { top: "35%", right: "34%" },
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
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeInOut} },
  }

  return (
     <motion.section
      id="featured-in" // Changed ID to avoid conflict with previous "industry"
      className="relative  w-full min-h-screen flex flex-col justify-center py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Adjust amount as needed
      variants={sectionVariants}
    >
      <div className="container mx-auto flex items-center gap-5 justify-center flex-col ">
        <div className="flex flex-col gap-5 flex-[0.5] w-auto justify-center items-center">
           <motion.div className="font-black text-main-light-blue text-4xl text-center" variants={itemVariants}>
            <p>{t("featuredIn.subtitle")}</p>
          </motion.div>
          <motion.p className="text-text-blue text-lg text-center max-w-2xl" variants={itemVariants}>
            {t("featuredIn.description")}
          </motion.p>
        </div>

        <div className="relative flex flex-wrap justify-center items-center gap-8 w-full min-h-[50vh] bg-[url('/tech.png')] bg-cover">
          {dataIndustry?.map((ele) => (
             <motion.div
              key={ele?.title}
              className="absolute flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-300 hover:scale-110 z-10 bg-white gap-3 shadow-lg"
              style={{
                top: ele.position.top,
                left: ele.position.left,
                right: ele.position.right,
                transform: ele.position.left ? "translateX(-50%)" : ele.position.right ? "translateX(50%)" : "",
                width: "140px", // Fixed width for consistency
                height: "70px", // Fixed height for consistency
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              

              <p className=" font-bold whitespace-nowrap text-xs text-main-blue">
                {ele?.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default IndustrySection;
