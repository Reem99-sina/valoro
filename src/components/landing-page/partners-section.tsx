import { usePartnerQuery } from "@/services/main-home";

import React from "react";

import TitleSliderComponet from "../shared/title-slider-componet";

const PartnersSection = () => {
  const { data } = usePartnerQuery();

  return (
    <TitleSliderComponet
      title={data?.data?.partner?.title}
      data={data?.data?.partner?.logo?.image}
    />
  );
};

export default PartnersSection;
