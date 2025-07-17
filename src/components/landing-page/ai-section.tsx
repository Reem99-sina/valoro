import { Info } from "lucide-react";
import Image from "next/image";
import ai from "@/assets/image/ai.png";
import { useTranslation } from "@/translations/clients";
import {
  Aws,
  Express,
  Llm,
  LlmModels,
  Next,
  Node,
  Python,
  ReactLogo,
  ReactNative,
} from "@/assets/icon";
import imam from "@/assets/image/imam.png";
import teaching from "@/assets/image/teaching-code.png";
import aqarbot from "@/assets/image/aqarbot.png";
import mashrook from "@/assets/image/mashrook.png";
import billa from "@/assets/image/billa.png";
import sa7by from "@/assets/image/sa7by.png";
import TitleSliderComponet from "../shared/title-slider-componet";

export function AiSection() {
  const { t } = useTranslation();
  const aiProject = [
    {
      title: t("aiProjects.projects.0.name"),
    },
    {
      title: t("aiProjects.projects.1.name"),
    },
    {
      title: t("aiProjects.projects.2.name"),
    },
    {
      title: t("aiProjects.projects.3.name"),
    },
    {
      title: t("aiProjects.projects.4.name"),
    },
  ];

  const projects = [
    {
      title: t("imam.title"),
      desc: t("imam.projectOverviewTitle"),
      projectOverview: t("imam.projectOverviewText"),
      image: imam,
      tech: [
        { id: "node", component: <Node /> },
        { id: "express", component: <Express /> },
        { id: "react", component: <ReactLogo /> },
        { id: "aws", component: <Aws /> },
        { id: "llm", component: <Llm /> },
        { id: "python", component: <Python /> },
      ],
    },
    {
      title: t("teachingCodingforKidsProject.title"),
      desc: t("teachingCodingforKidsProject.projectOverviewText"),
      image: teaching,

      projectOverview: t("teachingCodingforKidsProject.projectOverviewText"),
      tech: [
        { id: "express", component: <Express /> },
        { id: "react", component: <ReactLogo /> },
        { id: "next", component: <Next /> },
      ],
    },
    {
      title: t("aqarbootProject.title"),
      desc: t("aqarbootProject.projectOverviewText"),
      image: aqarbot,

      projectOverview: t("aqarbootProject.projectOverviewText"),

      tech: [
        { id: "node", component: <Node /> },
        { id: "express", component: <Express /> },
        { id: "python", component: <Python /> },
        { id: "react-native", component: <ReactNative /> },
        { id: "aws", component: <Aws /> },
        { id: "llm-models", component: <LlmModels /> },
      ],
    },
    {
      title: t("mashrookProject.title"),
      desc: t("mashrookProject.projectOverviewText"),
      image: mashrook,
      projectOverview: t("mashrookProject.projectOverviewText"),
      tech: [
        { id: "node", component: <Node /> },
        { id: "express", component: <Express /> },
        { id: "react", component: <ReactLogo /> },
        { id: "aws", component: <Aws /> },
        { id: "llm", component: <Llm /> },
        { id: "python", component: <Python /> },
      ],
    },
    {
      title: t("bilalApp.title"),
      desc: t("bilalApp.projectOverviewText"),
      image: billa,
      projectOverview: t("bilalApp.projectOverviewText"),
      tech: [
        { id: "python", component: <Python /> },
        { id: "node", component: <Node /> },
        { id: "react", component: <ReactLogo /> },
        { id: "aws", component: <Aws /> },
        { id: "express", component: <Express /> },
        { id: "llm", component: <Llm /> },
      ],
    },
    {
      title: t("sa7by.title"),
      desc: t("sa7by.projectOverviewText"),
      image: sa7by,
      projectOverview: t("sa7by.projectOverviewText"),
      tech: [
        { id: "node", component: <Node /> },
        { id: "express", component: <Express /> },
        { id: "aws", component: <Aws /> },
        { id: "llm", component: <Llm /> },
        { id: "python", component: <Python /> },
        { id: "react", component: <ReactLogo /> },
      ],
    },
  ];

  return (
    <section id="ai" className=" bg-cover w-full  flex flex-col justify-center">
      <div className="container mx-auto ">
        <div className="flex items-center gap-5 justify-center min-h-screen">
          <div className="flex flex-col gap-5 flex-1 w-auto">
            <div className="text-center  w-max font-black text-main-light-blue text-4xl">
              {t("aiProjects.title")}
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {aiProject?.map((ele, index) => (
                <ul className="list-disc" key={index}>
                  <div className="  text-start flex justify-start items-center gap-3">
                    <Info className=" text-main-light-blue" />
                    <p className="text-main-blue font-bold">{ele?.title}</p>
                  </div>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <Image src={ai} width={250} height={200} alt="blockchainImage" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5  w-auto py-6 min-h-screen items-center justify-center">
        <TitleSliderComponet title={t("aiProjects.title")} data={projects} />
      </div>
    </section>
  );
}
