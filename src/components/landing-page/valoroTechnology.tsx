import {
  Aws,
  Doker,
  Ethereum,
  Express,
  Fabric,
  Kubernetes,
  Llm,
  LlmModels,
  Nest,
  Next,
  Node,
  Openshift,
  Python,
  ReactLogo,
  ReactNative,
} from "@/assets/icon";
import { useTranslation } from "@/translations/clients";
import Slider from "react-slick";
import { Settings } from "react-slick";

export function TechnologySection() {
  const { t } = useTranslation();
  const data = [
    { id: "node", component: <Node /> },
    { id: "nest", component: <Nest /> },
    { id: "next", component: <Next /> },
    { id: "react", component: <ReactLogo /> },
    { id: "express", component: <Express /> },
    { id: "kubernetes", component: <Kubernetes /> },
    { id: "fabric", component: <Fabric /> },
    { id: "aws", component: <Aws /> },
    { id: "llm", component: <Llm /> },
    { id: "llmModels", component: <LlmModels /> },
    { id: "openshift", component: <Openshift /> },
    { id: "python", component: <Python /> },
    { id: "reactNative", component: <ReactNative /> },
    { id: "docker", component: <Doker /> },
    { id: "ethereum", component: <Ethereum /> },
  ];
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Speed of the transition animation (in ms)
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once for a smoother effect
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous movement (relies on `speed` for transition duration)
    cssEase: "linear", // Ensures a linear, continuous-like movement
    arrows: false, // Hide navigation arrows
    pauseOnHover: false, // Keep autoplaying on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="technology" className=" bg-cover w-full  flex flex-col min-h-[60vh] justify-center items-center py-12">
      <div className=" w-full container mx-auto  mt-6 flex items-center gap-6 justify-center flex-col">
        <div className="flex flex-col items-start  ">
          <div className="text-[28px] md:text-[40px] font-bold text-third-blue text-center">
            {t("valoroTechnologyStack.title")}
          </div>
        </div>
        <Slider {...settings} className="max-w-[60vw] items-center">
          {data?.map((ele) => (
            <div
              key={ele?.id}
              className="flex items-center space-x-2  px-4 py-3   hover:shadow-md transition-shadow"
            >
              {ele?.component}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
