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

  return (
    <section id="technology" className=" bg-cover w-full  flex flex-col ">
      <div className="container mx-auto ">
        <div className="flex items-center gap-5 justify-center min-h-[50vh] w-full">
          <div className="flex flex-col gap-5 flex-1 w-auto items-center">
            <div className="text-center  w-max font-black text-main-light-blue text-2xl">
              {t("valoroTechnologyStack.title")}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {data?.map((ele) => (
                <div
                  key={ele?.id}
                  className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  {ele?.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
