import Check from "@/assets/image/check.png";
import Services from "@/assets/image/services.jpg";

import { config } from "@/config";
import { useServiesQuery } from "@/services/main-home";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  const { data } = useServiesQuery();
  console.log(data, "data");

  return (
    <section
      id="industry"
      className="bg-[url('/header.PNG')] bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex items-center gap-5 justify-between">
        <div className="flex flex-col gap-5 flex-1 w-auto">
          <div className="bg-main-light-blue p-4 w-max font-black text-white">
            <p>{data?.data?.Services?.title}</p>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            {data?.data?.Services?.bullets?.map((ele) => (
              <ul className="list-disc" key={ele?.id}>
                <div
                  className=" p-4 text-start flex justify-start items-center gap-3"
                  key={ele?.id}
                >
                  <Image src={Check} alt="Check" width={15} height={15} />
                  <p className="text-text-blue font-bold">{ele?.title}</p>
                </div>
                {ele?.description?.map((elem) => (
                  <li className="text-text-blue ml-12" key={elem?.id}>{elem?.desc}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div>
          <Image src={Services} width={400} height={200} alt="service" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
