import { useTranslation } from "@/translations/clients";

import { motion } from "framer-motion";

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
          className="text-xl sm:text-2xl md:text-6xl  font-extrabold leading-tight mt-4 drop-shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="" 
            variants={itemVariants}
          >
            {t("hero.title")} 
          </motion.span>
        </motion.h2>
        <motion.p
          className="mt-6 max-w-2xl text-lg sm:text-xl  mx-auto text-center drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("about.description")}
        </motion.p>
      </div>
    </section>
  );
};

export default MainHeader;
