"use client";

import Link from "next/link";
import clsx from "clsx";

import { useMemo } from "react";
import { VoloroLogo } from "@/assets/icon";
import { Button } from "../shared/button.component";
import { useTranslation } from "@/translations/clients";

export const Header = () => {
  const { t } = useTranslation();
  const links = useMemo(() => {
    return [
      {
        id: 1,
        text: t("nav.home"),

        to: "#home",
      },
      {
        id: 2,
        text: t("nav.about"),

        to: "#about",
      },
      {
        id: 3,
        text: t("nav.projects"),

        to: "#project",
      },
      {
        id: 4,
        text: t("nav.services"),
        to: "#industry",
      },
    ];
  }, []);

  return (
    <div
      className={clsx(
        " flex justify-center left-10 right-10   my-5 rounded-4xl z-20",
        "bg-transparent"
      )}
    >
      <div
        className={clsx(
          " flex w-full max-w-screen flex-row items-center justify-between self-center overflow-x-hidden  text-sm font-bold px-4"
        )}
      >
        <div className="flex  items-center justify-start gap-28 ">
          {/* <VoloroLogo className="w-24 h-28" /> */}
          <h1 className="text-4xl  font-extrabold leading-tight drop-shadow-lg">
            {t("hero.name")}
          </h1>
        </div>
        <div className="hidden  md:flex  flex-row gap-x-8">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-row items-center gap-3 font-sans"
            >
              <Link
                href={link.to as string}
                className={clsx(
                  "relative text-lg font-bold text-white  capitalize whitespace-nowrap"
                )}
              >
                {link.text}
              </Link>
              <div className="cursor-pointer" onClick={() => {}}></div>
            </div>
          ))}
          <Button text="Request a Demo" className="!px-6 !bg-third-blue !text-four-blue" />
        </div>
      </div>
    </div>
  );
};
