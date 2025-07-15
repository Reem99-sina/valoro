import { useTranslation } from "@/translations/clients";
import { Info } from "lucide-react";
import Image from "next/image";
import BlockChain from "@/assets/image/blockchain-platform.png";

export function BlockchainPlateform() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("blockChainPlatform.hyperledgerFabric.title"),
      desc: [
        t("blockChainPlatform.hyperledgerFabric.points.0"),
        t("blockChainPlatform.hyperledgerFabric.points.1"),
        t("blockChainPlatform.hyperledgerFabric.points.2"),
        t("blockChainPlatform.hyperledgerFabric.points.3"),
        t("blockChainPlatform.hyperledgerFabric.points.4"),
        t("blockChainPlatform.hyperledgerFabric.points.5"),
        t("blockChainPlatform.hyperledgerFabric.points.6"),
        t("blockChainPlatform.hyperledgerFabric.points.7"),
      ],
    },
  ];

  return (
    <section
      id="blockchain-plateform"
      className=" bg-cover w-full  flex flex-col justify-center"
    >
      <div className="container mx-auto ">
        <div className="flex items-center gap-5 justify-center min-h-screen">
          <div className="flex flex-col gap-5 flex-1 w-auto">
            <div className="text-center  w-max font-black text-main-light-blue text-2xl">
              {t("blockChainPlatform.title")}
            </div>
            <div className="flex flex-col gap-3 flex-1">
              {data?.map((ele, index) => (
                <ul className="list-disc" key={index}>
                  <div className="flex-col  text-start flex justify-start items-start gap-3">
                    <div className="flex items-center gap-3">
                      <Info className=" text-main-light-blue" />
                      <p className="text-main-blue font-bold">{ele?.title}</p>
                    </div>
                    {ele?.desc?.map(
                      (elem, index) =>
                        elem && (
                          <li
                            className="text-main-blue ml-5 text-sm"
                            key={index}
                          >
                            {elem}
                          </li>
                        )
                    )}
                  </div>
                </ul>
              ))}
            </div>
          </div>
          <div>
            <Image
              src={BlockChain}
              width={250}
              height={200}
              alt="blockchainImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
