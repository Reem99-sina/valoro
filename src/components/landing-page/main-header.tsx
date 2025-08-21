import { useTranslation } from "@/translations/clients";

import { motion } from "framer-motion";
import { Button } from "../shared/button.component";

const MainHeader = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each word's animation
        delayChildren: 0.5, // Delay before the main heading animation starts
      },
    },
  };

  // Variants for individual words
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className=" flex flex-col gap-3 justify-center items-center text-center px-4 py-12"
      id="home"
    >
      <div className="flex flex-col justify-center items-center gap-3 text-center px-4 py-12 min-h-[75vh] max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-2xl md:text-6xl  font-extrabold leading-tight mt-4 drop-shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-span block bg-clip-text  text-third-blue"
            variants={itemVariants}
          >
            {t("hero.title")}
          </motion.span>
          <motion.span
            className=" text-span-2 block bg-clip-text "
            variants={itemVariants}
          >
            {t("hero.subTitle")}
          </motion.span>
        </motion.h2>
        <motion.p
          className="enterprise-paragraph mt-6 text-balance text-lg leading-7 text-slate-600 sm:text-xl dark:text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("about.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
        >
          <Button
            text="Get in Touch"
            className="!px-6 bg-third-blue !text-four-blue rounded-xl !w-auto "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MainHeader;
