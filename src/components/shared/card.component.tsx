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
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
      <div
        className={clsx(
          " space-y-3 flex-grow flex  justify-between items-start",
          index % 3 === 2 ? "flex-row-reverse" : "flex-col"
        )}
      >
        <div
          className={clsx(
            "w-full  overflow-hidden bg-main-blue",
            index % 3 === 2 ? "h-full mb-0" : "h-52"
          )}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col justify-between items-start gap-3 p-6">
          <div className="flex flex-col justify-between items-start gap-3">
            <h3 className="text-xl font-bold text-main-blue leading-tight">
              {title}
            </h3>
            <li className="text-gray-500 text-sm leading-relaxed">{desc}</li>
          </div>
          {tech && (
            <div className=" space-y-3">
              <h3 className="text-xl font-bold text-main-blue leading-tight">
                {t("techStack")}
              </h3>
              <div className="text-xl font-bold  leading-tight flex items-center gap-3 flex-wrap">
                {tech?.map((ele) => (
                  <div key={ele?.id}>{ele?.component}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
