import React from "react";
import { motion } from "framer-motion"
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
           <motion.div
            key={index}
            className={`flex justify-center h-full ${index % 3 === 2 ? "md:col-span-2" : "md:col-span-1"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} 
            transition={{ duration: 0.6, delay: index * 0.1 }} 
          >
            <BlogCard
              title={ele?.title}
              desc={ele?.projectOverview}
              imageUrl={ele?.image}
              tech={ele?.tech}
              index={index}
            />
          </motion.div>
        ))}
      </div>
      {/* <EmblaTestimonialSlider testimonials={data}/> */}
    </div>
  );
};

export default TitleSliderComponet;
