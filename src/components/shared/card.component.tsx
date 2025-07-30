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
      <div className="flex flex-col-reverse md:flex-row items-stretch w-full min-w-[700px] min-h-[600px]">
        {/* النص */}
        <div className="flex flex-col justify-evenly gap-3 p-6 md:w-1/2">
          <h3 className="text-xl font-bold text-main-blue leading-tight">{title}</h3>
          <li className="text-gray-500 text-sm leading-relaxed">{desc}</li>
          {tech && (
            <div className="space-y-3 mt-4">
              <h3 className="text-xl font-bold text-main-blue leading-tight">{t("techStack")}</h3>
              <div className="text-xl font-bold leading-tight flex items-center gap-3 flex-wrap">
                {tech?.map((ele) => (
                  <div key={ele?.id}>{ele?.component}</div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* الصورة */}
        {imageUrl&&<div className="md:w-1/2 w-full flex items-center justify-center bg-main-blue">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>}
      </div>
    </div>
  );
}
