import { useTranslation } from "@/translations/clients";
import { Brain, Cpu, Layers } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import React from "react";

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    {
      title: t("services.digitalTransformation.title"),
      icon: <Cpu className="w-6 h-6 text-white" />,
      desc: t("services.digitalTransformation.description"),
    },
    {
      title: t("services.aiSolutions.title"),
      icon: <Brain className="w-6 h-6 text-white" />,

      desc: t("services.aiSolutions.description"),
    },
    {
      title: t("services.blockchain.title"),
      icon: <Layers className="w-6 h-6 text-white" />,

      desc: t("services.blockchain.description"),
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
      id="industry"
      className=" w-full min-h-[90vh] flex flex-col justify-center py-12"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.1 }} // Adjust amount as needed
      variants={sectionVariants}
    >
      <div className="container mx-auto flex items-center gap-5 justify-center flex-col">
        <div className="flex flex-col gap-5 flex-1 w-auto items-center">
          <div className="text-center p-4 w-max font-black text-main-blue text-4xl">
            <motion.div
              className="text-center p-4 w-max font-black text-main-blue text-4xl"
              variants={itemVariants}
            >
              {" "}
              <p>{t("services.title")}</p>
            </motion.div>
          </div>

          <motion.div
            className="flex gap-3 flex-1 flex-wrap md:flex-nowrap"
            variants={sectionVariants}
          >
            {services?.map((ele, index) => (
              <motion.ul
                className="bg-main-blue rounded-2xl p-8 transition-all duration-300 hover:scale-105 list-disc w-full"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-main-blue to-main-light-blue rounded-lg flex items-center justify-center mb-6">
                  {ele?.icon}
                </div>
                <p className=" font-bold text-main-light-blue text-lg">{ele?.title}</p>

                {ele?.desc?.split(".")?.map(
                  (ele, index) =>
                    ele && (
                      <li className=" text-md  ml-4" key={index}>
                        {ele}
                      </li>
                    )
                )}
              </motion.ul>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
