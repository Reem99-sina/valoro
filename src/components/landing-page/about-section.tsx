import { config } from "@/config";
import { useAboutUsQuery } from "@/services/main-home";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const { data } = useAboutUsQuery();

  return (
    <section
      id="about"
      className=" w-full flex flex-col justify-center bg-[url('/about_us.PNG')] bg-cover min-h-[90vh]"
    >
      <div className="container mx-auto flex gap-5">
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-main-light-blue p-4 w-fit font-black text-white rounded-lg">
            {data?.data?.about_us?.heading}
          </div>
          <p className="text-text-blue">{data?.data?.about_us?.text}</p>
        </div>
        <div className="flex-1">
          {config.NEXT_PUBLIC_BASE_URL && data?.data?.about_us?.image?.url ? (
            <Image
              src={`${data?.data?.about_us?.image?.url}`}
              // src={
              //   config.NEXT_PUBLIC_BASE_URL + data?.data?.about_us?.image?.url
              // }
              alt="about"
              width={400}
              height={400}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
