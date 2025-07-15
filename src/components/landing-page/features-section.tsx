import React from "react";
import TitleSliderComponet from "../shared/title-slider-componet";

import { useTranslation } from "@/translations/clients";
import {
  Pdesc,
  Saudi,
  Sdaia,
  Nest,
  Next,
  ReactLogo,
  Ethereum,
  Node,
  Kubernetes,
  Doker,
  Openshift,
  Fabric,
} from "@/assets/icon";
import apar from "@/assets/image/aqar.png";
import du from "@/assets/image/du.png";
import bokra from "@/assets/image/bokra.png";
import oqod from "@/assets/image/oqod.png";
import digital from "@/assets/image/digital.png";
import ataaCoin from "@/assets/image/yalla.png";
import coronavirus from "@/assets/image/coronavirus.png";
import tradeflo from "@/assets/image/tradeflo.png";

import intercom from "@/assets/image/intercom.png";

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t("ideaToMarket.title"),
      desc: t("ideaToMarket.projectOverviewTitle"),
      projectOverview: t("ideaToMarket.projectOverviewText"),
      image: apar,
      tech: [
        { id: "node", component: <Node /> },
        { id: "nest", component: <Nest /> },
        { id: "react", component: <ReactLogo /> },
        { id: "docker", component: <Doker /> },
        { id: "kubernetes", component: <Kubernetes /> },
        { id: "ethereum", component: <Ethereum /> },
      ],
      logos: [
        {
          icon: <Sdaia />,
        },
        {
          icon: <Saudi />,
        },
        {
          icon: <Pdesc />,
        },
      ],
    },
    {
      title: t("oneStopShopSystem.title"),
      desc: t("oneStopShopSystem.duTitle"),
      image: du,

      projectOverview: t("oneStopShopSystem.duText"),
      tech: [
        { id: "node", component: <Node /> },
        { id: "react", component: <ReactLogo /> },
        { id: "docker", component: <Doker /> }, // If this is a typo, rename to <Docker />
        { id: "ethereum", component: <Ethereum /> },
      ],
    },
    {
      title: t("digitalGoldHallmarking.title"),
      desc: t("digitalGoldHallmarking.overviewTitle"),
      image: intercom,

      projectOverview: t("digitalGoldHallmarking.overviewText"),
      keys: [
        t("digitalGoldHallmarking.objectives.recordKeeping"),
        t("digitalGoldHallmarking.objectives.transparency"),
        t("digitalGoldHallmarking.objectives.processAutomation"),
        t("digitalGoldHallmarking.objectives.fraudPrevention"),
        t("digitalGoldHallmarking.objectives.userPortals"),
      ],
      tech: [
        { id: "node", component: <Node /> },
        { id: "openshift", component: <Openshift /> },
        { id: "fabric", component: <Fabric /> },
        { id: "react", component: <ReactLogo /> },
        { id: "next", component: <Next /> },
        { id: "docker", component: <Doker /> },
        { id: "kubernetes", component: <Kubernetes /> },
      ],
    },
    {
      title: t("bokra.title"),
      desc: t("bokra.projectOverviewText"),
      image: bokra,
      projectOverview: t("bokra.projectOverviewText"),
      tech: [
        { id: "node", component: <Node /> },
        { id: "nest", component: <Nest /> },
        { id: "react", component: <ReactLogo /> },
        { id: "docker", component: <Doker /> },
        { id: "next", component: <Next /> },
        { id: "ethereum", component: <Ethereum /> },
        { id: "kubernetes", component: <Kubernetes /> },
      ],
    },
    {
      title: t("oqod.title"),
      desc: t("oqod.projectOverviewText"),
      image: oqod,
      projectOverview: t("oqod.projectOverviewText"),
      tech: [
        { id: "node", component: <Node /> },
        { id: "nest", component: <Nest /> },
        { id: "react", component: <ReactLogo /> },
        { id: "fabric", component: <Fabric /> },
      ],
    },
    {
      title: t("ipexhcnage.title"),
      desc: t("ipexhcnage.projectOverviewText"),
      image: "",
      projectOverview: t("ipexhcnage.projectOverviewText"),
      tech: [
        { id: "node", component: <Node /> },
        { id: "docker", component: <Doker /> },
        { id: "next", component: <Next /> },
        { id: "openshift", component: <Openshift /> },
        { id: "ethereum", component: <Ethereum /> },
        { id: "nest", component: <Nest /> },
        { id: "react", component: <ReactLogo /> },
        { id: "kubernetes", component: <Kubernetes /> },
      ],
    },
    {
      title: t("digitalCertificate.title"),
      desc: t("digitalCertificate.projectOverviewText"),
      image: digital,
      projectOverview: t("digitalCertificate.projectOverviewText"),
    },
    {
      title: t("ataaCoin.title"),
      desc: t("ataaCoin.projectOverviewText"),
      image: ataaCoin,
      projectOverview: t("ataaCoin.projectOverviewText"),
    },
    {
      title: t("coronavirus.title"),
      desc: t("coronavirus.projectOverviewText"),
      image: coronavirus,
      projectOverview: t("coronavirus.projectOverviewText"),
    },
    {
      title: t("tradeflo.title"),
      desc: t("tradeflo.projectOverviewText"),
      image: tradeflo,
      projectOverview: t("tradeflo.projectOverviewText"),
    },
  ];

  return (
    <TitleSliderComponet
      title={t("blockchainProjects.title")}
      data={projects}
    />
  );
};

export default FeaturesSection;
