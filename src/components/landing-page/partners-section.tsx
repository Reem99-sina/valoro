import React from "react";

import { useTranslation } from "@/translations/clients";
import { Dj, Hp, Ibm, Ipma, Saudi, Sdaia } from "@/assets/icon";
import Slider from "react-slick";
import { Settings } from "react-slick";

const PartnersSection = () => {
  const { t } = useTranslation();
  const icons = [
    { id: "sdaia", component: <Sdaia /> },
    { id: "hp", component: <Hp /> },
    { id: "dj", component: <Dj /> },
    { id: "ipma", component: <Ipma /> },
    { id: "saudi", component: <Saudi /> },
    { id: "ibm", component: <Ibm /> },
  ];
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500, // Speed of the transition animation (in ms)
    slidesToShow: 5, // Number of slides to show at once
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className=" w-full container mx-auto  my-6 flex items-center gap-6">
      <div className="flex flex-col items-start  flex-[0.2]">
        <div className="text-center  font-black text-main-light-blue text-2xl whitespace-nowrap">
          {t("partners.title")}
        </div>
      </div>

      <Slider {...settings} className="max-w-[60vw] items-center">
        {icons?.map((ele) => (
          <div className="flex  justify-center px-4 h-full gap-3" key={ele?.id}>
            {ele?.component}
          </div>
        ))}
      </Slider>

      {/* <EmblaTestimonialSlider testimonials={data}/> */}
    </div>
  );
};

export default PartnersSection;
