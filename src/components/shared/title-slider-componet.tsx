import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";
import { config } from "@/config";

const TitleSliderComponet = ({
  title,
  data,
}: {
  title?: string;
  data?: any[];
}) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className=" w-full container mx-auto  my-6">
      <div className="bg-main-light-blue p-4 w-fit font-black text-white my-6 mx-auto rounded-lg">
        {/* {data?.data?.about_us?.partner} */}
        {title}
      </div>
      <Slider {...settings} className="">
        {data?.map((ele) => (
          <div className="flex items-center justify-center">
            <Image
              src={(ele?.url||ele?.icon?.url)}
              alt="about"
              width={100}
              height={100}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TitleSliderComponet;
