"use client";

import Link from "next/link";
import clsx from "clsx";

import { useEffect, useMemo, useState } from "react";
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
        to: "#services",
      },
    ];
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={clsx(
        " flex justify-center left-10 right-10 fixed top-0  my-5 rounded-4xl z-10",
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div
        className={clsx(
          " flex w-full max-w-screen flex-row items-center justify-between self-center overflow-x-hidden  text-sm font-bold px-4"
        )}
      >
        <div className="flex  items-center justify-start gap-28 ">
          <VoloroLogo className="w-24 h-28" />
        </div>
        <div className="  flex  flex-row gap-x-8">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-row items-center gap-3 font-sans"
            >
              <Link
                href={link.to as string}
                className={clsx(
                  "relative text-md font-bold text-main-blue  capitalize whitespace-nowrap"
                )}
              >
                {link.text}
              </Link>
              <div className="cursor-pointer" onClick={() => {}}></div>
            </div>
          ))}
          <Button text="Login" className="!px-6" />
        </div>
      </div>
    </div>
  );
};
