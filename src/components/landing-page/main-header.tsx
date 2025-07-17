import { useTranslation } from "@/translations/clients";

const MainHeader = () => {
  const { t } = useTranslation();

  return (
     <section
      className="text-main-blue flex flex-col gap-3 min-h-screen justify-center items-center text-center px-4 py-12"
      id="home"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-main-light-blue">{t("hero.name")}</h1>
        <h2 className="text-xl sm:text-2xl md:text-6xl  font-extrabold leading-tight mt-4">
          <span className="text-main-blue">{t("hero.title")}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-main-blue mx-auto text-center">{t("about.description")}</p>
      </div>

      
    </section>
  );
};

export default MainHeader;
