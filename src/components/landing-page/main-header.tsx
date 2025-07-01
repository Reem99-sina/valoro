import { VoloroLogo } from "@/assets/icon";
import { config } from "@/config";
import { KpiCard } from "@/types/common.type";
import Image from "next/image";

interface props {
  title?: string;
  desc?: string;
  cards?: KpiCard[];
}

const MainHeader = ({ desc, cards }: props) => {
  return (
    <section className="text-main-blue flex flex-col gap-3 " id="home">
      <VoloroLogo />
      <p className="ml-[10%]">{desc}</p>
      <div className="grid grid-cols-3 gap-5">
        {cards?.map((ele) => (
          <div
            className="bg-white border border-border-light shadow-lg rounded-4xl py-5 px-3 flex flex-col gap-4 items-start lg:min-w-[260px]"
            key={ele?.id}
          >
            <Image src={ele?.icon?.url} alt="icon" width={100} height={100} />
            <div className=" bg-main-orange p-3 text-3xl text-white font-black">
              <p>{ele?.heading}</p>
            </div>
            <div className=" bg-main-blue p-3 text-3xl text-white font-black">
              {ele?.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainHeader;
