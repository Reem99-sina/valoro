import Image from "next/image";
import React from "react";
import blockchainImage from "@/assets/image/blockchange_project.png";
import { motion } from "framer-motion";
import { useTranslation } from "@/translations/clients";
import { Award, Info, Target } from "lucide-react";
import { easeInOut } from "framer-motion";

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
      icon: <Target className="text-third-blue" />,
      desc: [
        t("blockchainProfessionalServices.customerChallenge.challenges.0"),
        t("blockchainProfessionalServices.customerChallenge.challenges.1"),
        t("blockchainProfessionalServices.customerChallenge.challenges.2"),
        t("blockchainProfessionalServices.customerChallenge.challenges.3"),
       
      ],
    },
    {
      title: t("blockchainProfessionalServices.valoroBenefits.title"),
      icon: <Award className="text-third-blue" />,
      desc: [
        t("blockchainProfessionalServices.valoroBenefits.benefits.0"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.1"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.2"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.3"),
        t("blockchainProfessionalServices.valoroBenefits.benefits.4"),
      ],
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
    <>
      <motion.section
        id="blockchain"
        className=" w-full flex items-center justify-center py-12 min-h-screen"
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
        variants={sectionVariants}
      >
        <div className="relative gradient-border-aiplatform rounded-[45px] bg-ten-blue text-white py-4  text-center max-w-[90%] md:max-w-[70%]">
          <div className="container mx-auto ">
            <div className="flex  flex-col gap-5 justify-center py-12">
              <motion.div
                className="flex flex-col gap-5 items-center"
                variants={itemVariants}
              >
                <div className="text-[28px] md:text-[40px] font-bold text-third-blue text-center">
                  {t("blockchainProjects.title")}
                </div>
              </motion.div>
              <div className="flex  gap-5 items-start flex-col-reverse md:flex-row">
                <motion.div className="flex justify-center items-center w-full" variants={itemVariants}>
                  <Image
                    src={blockchainImage}
                    width={400}
                    height={200}
                    alt="blockchainImage"
                  />
                </motion.div>
                <div className="flex flex-col gap-5  text-lg justify-center items-start">
                  {blockchainProject?.map((ele, index) => (
                    <motion.ul
                      className="list-disc"
                      key={index}
                      variants={itemVariants}
                    >
                      <div className="  text-start flex justify-start items-center gap-3">
                        <Info className=" text-main-light-blue animate-bounce" />
                        <p className="text-white text-lg">{ele?.title}</p>
                      </div>
                    </motion.ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="blockchain-sevices"
        className=" w-full flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
        variants={sectionVariants}
      >
        <div className="container mx-auto ">

          <div className="flex flex-col gap-5 flex-1 w-auto items-center">
            <div className="flex flex-col gap-5 w-full justify-center">
              <motion.div
                className="text-[28px] md:text-[40px] font-bold text-third-blue text-center"
                variants={itemVariants}
              >
                {t("blockchainProfessionalServices.title")}
              </motion.div>
              <motion.div
                className="flex gap-3  flex-wrap md:flex-nowrap"
                variants={sectionVariants}
              >
                {blockChainServices?.map((ele, index) => (
                  <ul
                    className="bg-eight-blue rounded-4xl  shadow-lg p-6 text-start text-white w-full hover:border hover:border-third-blue"
                    key={index}
                  >
                    <div className="relative w-12 h-12 flex items-center justify-center mb-6 gradient-border-card">
                      {ele?.icon}
                    </div>
                    <p className=" font-bold text-white text-xl">
                      {ele?.title}
                    </p>

                    {ele?.desc?.map(
                      (elem, index) =>
                        ele && (
                          <li className=" text-sm  " key={index}>
                            {elem}
                          </li>
                        )
                    )}
                  </ul>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default BlockchainSection;
