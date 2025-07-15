
import React from "react";
import Slider, { Settings } from "react-slick";
import { BlogCard } from "./card.component";

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
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,

    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024, // Screens <= 1024px (e.g., tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Screens <= 768px (e.g., mobile landscape)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Screens <= 480px (e.g., mobile portrait)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-full container mx-auto  my-6">
      <div className="text-2xl w-fit font-black text-main-light-blue my-6 mx-3 rounded-lg text-start">
        {/* {data?.data?.about_us?.partner} */}
        {title}
      </div>

      <Slider {...settings} className="project-slider">
        {data?.map((ele, index) => (
          <div className="flex  justify-center px-4 h-full gap-3" key={index}>
            <BlogCard
              title={ele?.title}
              desc={ele?.projectOverview}
              imageUrl={ele?.image}
              tech={ele?.tech}
            />
          </div>
        ))}
      </Slider>
      {/* <EmblaTestimonialSlider testimonials={data}/> */}
    </div>
  );
};

export default TitleSliderComponet;
