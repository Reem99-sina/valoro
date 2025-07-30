import React from "react";
import { BlogCard } from "./card.component";

const TitleSliderComponet = ({
  title,
  data,
}: {
  title?: string;
  data?: any[];
}) => {
  return (
    <div className=" w-full container mx-auto  my-6 flex flex-col items-center overflow-hidden">
      <div className="text-4xl w-fit font-black text-main-light-blue my-6 mx-3 rounded-lg text-center">
        {/* {data?.data?.about_us?.partner} */}
        {title}
      </div>
      <div className="relative flex flex-col gap-8 w-screen  left-1/2 -translate-x-1/2">
        <div className="relative flex gap-8 home-videos-row-top">
          {data?.map((ele, index) => (
            <div
              key={index}
              className={`flex justify-center h-full w-full md:w-1/2`}
            >
              <BlogCard
                title={ele?.title}
                desc={ele?.projectOverview}
                imageUrl={ele?.image}
                tech={ele?.tech}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
      {/* <EmblaTestimonialSlider testimonials={data}/> */}
    </div>
  );
};

export default TitleSliderComponet;
