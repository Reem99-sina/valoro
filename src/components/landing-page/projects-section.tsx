import { config } from "@/config";
import { useProjectsQuery } from "@/services/main-home";
import Image from "next/image";
import React from "react";

const ProjectsSection = () => {
  const { data } = useProjectsQuery();

  return (
    <section
      id="project"
      className="bg-[url('/header.PNG')] bg-cover w-full min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto flex items-center gap-5 justify-center">
        <div className="flex flex-col gap-5 flex-1 w-auto">
          <div className="bg-main-light-blue p-4 w-max font-black text-white">
            <p>{data?.data?.projects?.heading}</p>
          </div>
          <p className="text-text-blue">{data?.data?.projects?.text}</p>
        </div>
        <div className="grid grid-cols-3  gap-3 flex-1">
          {data?.data?.projects?.icons?.image?.map((ele) => (
            <div
              className=" bg-white p-4 shadow-2xl flex justify-center items-center"
              key={ele?.id}
            >
              <Image
                src={ele?.url}
                alt={ele?.caption || "icon"}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
