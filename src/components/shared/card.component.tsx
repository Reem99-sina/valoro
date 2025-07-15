import { useTranslation } from "@/translations/clients";
import Image from "next/image";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  desc: string;
  tech?: any[];
}

export function BlogCard({ imageUrl, title, desc, tech }: BlogCardProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col h-full bg-main-blue rounded-2xl transition-all duration-300 hover:scale-105">
      <div className="p-6 space-y-3 flex-grow flex flex-col justify-between items-start">
        <div className="flex flex-col justify-between items-start gap-3">
          <h3 className="text-xl font-bold text-main-light-blue leading-tight">
            {title}
          </h3>
          <li className="text-white text-sm leading-relaxed">{desc}</li>
        </div>
        {tech && (
          <div className=" space-y-3">
            <h3 className="text-xl font-bold text-main-light-blue leading-tight">
              {t("techStack")}
            </h3>
            <div className="text-xl font-bold text-main-light-blue leading-tight flex items-center gap-3 flex-wrap">
              {tech?.map((ele) => (
                <div key={ele?.id}>{ele?.component}</div>
              ))}
            </div>
          </div>
        )}
        <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center overflow-hidden rounded-2xl">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="object-contain w-full h-full"
          />
          {/* Optional: Add a subtle gradient overlay on the image if needed for style consistency */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-600/50 to-transparent flex items-end gap-2"></div>
        </div>
      </div>
    </div>
  );
}
