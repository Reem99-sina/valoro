import { config } from "@/config";
import { useIndustryQuery } from "@/services/main-home";
import Image from "next/image";
import React from "react";

const IndustrySection = () => {
  const { data } = useIndustryQuery();
  console.log(data, "data");
  return (
    <section
      id="industry"
      className="bg-[url('/industry.png')] bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex items-center gap-5 justify-center">
        <div className="flex flex-col gap-5 flex-1 w-auto">
          <div className="bg-main-light-blue p-4 w-max font-black text-white">
            <p>{data?.data?.industry?.heading}</p>
          </div>
          <p className="text-text-blue">{data?.data?.industry?.text}</p>
        </div>
        <div className="flex flex-col items-end gap-3 flex-1">
          {data?.data?.industry?.cards?.map((ele) => (
            <div
              className=" bg-main-light-blue w-[200px] p-4 text-start shadow-2xl flex justify-start items-center"
              key={ele?.id}
            >
                <p>{ele?.heading}</p>
              {/* <Image
                src={config?.NEXT_PUBLIC_BASE_URL + ele?.icon?.url}
                alt={ele?.icon?.caption || "icon"}
                width={50}
                height={50}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
