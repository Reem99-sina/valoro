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
    <div className=" w-full container mx-auto  my-6 flex flex-col items-center">
      <div className="text-4xl w-fit font-black text-main-light-blue my-6 mx-3 rounded-lg text-center">
        {/* {data?.data?.about_us?.partner} */}
        {title}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.map((ele, index) => (
          <div
            key={index}
            className={`flex justify-center h-full ${index % 3 === 2  ? "md:col-span-2" : "md:col-span-1"}`}
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
      {/* <EmblaTestimonialSlider testimonials={data}/> */}
    </div>
  );
};

export default TitleSliderComponet;
