import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import Image from "next/image";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  desc: string;
  tech?: any[];
  index: number;
}

export function BlogCard({
  imageUrl,
  title,
  desc,
  tech,
  index,
}: BlogCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        "relative bg-white rounded-3xl shadow-2xl overflow-hidden   flex  items-center min-h-[400px]",
        index % 3 === 2 ? "flex-col md:flex-row-reverse w-full" : "flex-col"
      )}
    >
      {/* صورة دائرية في الأعلى */}
      {imageUrl && (
        <div
          className={clsx(
            "w-full  overflow-hidden bg-main-blue flex justify-center",
            index % 3 === 2 ? "h-full mb-0" : "h-80"
          )}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={150}
            height={100}
            className=" object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      <div className=" flex flex-col justify-center items-start h-full px-5 pb-5">
        <h3 className="text-main-blue text-lg font-bold  mb-4">
          {title}
        </h3>
        <p className=" text-main-blue text-md  mb-4">{desc}</p>
        {tech && (
          <div className="mt-2">
            <h4 className="text-main-blue text-lg mb-2 font-bold">
              {t("techStack")}
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {tech?.map((ele) => (
                <span
                  key={ele?.id}
                  className=" text-blue-200 px-3 py-1 rounded-full text-md"
                >
                  {ele?.component}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
