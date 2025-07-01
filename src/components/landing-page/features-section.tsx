import React from "react";
import TitleSliderComponet from "../shared/title-slider-componet";
import { useFeaturedQuery } from "@/services/main-home";

const FeaturesSection = () => {
  const { data } = useFeaturedQuery();
  console.log(data, "data");

  return (
    <TitleSliderComponet
      title={data?.data?.features?.title}
      data={data?.data?.features?.logos}
    />
  );
};

export default FeaturesSection;
