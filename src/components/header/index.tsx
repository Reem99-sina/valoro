"use client";

import Link from "next/link";
import clsx from "clsx";

import { useMemo } from "react";
import { ProfileUser, VoloroLogo } from "@/assets/icon";
import { Button } from "../shared/button.component";

export const Header = () => {
  const links = useMemo(() => {
    return [
      {
        id: 1,
        text: "home",

        to: "#home",
      },
      {
        id: 2,
        text: "About us",

        to: "#about",
      },
      {
        id: 3,
        text: "Projects",

        to: "#project",
      },
       {
        id: 4,
        text: "services",
        to: "#services",
      },
    ];
  }, []);

  return (
    <div className={clsx(" flex justify-center py-6 w-full")}>
      <div
        className={clsx(
          " flex w-full max-w-screen flex-row items-center justify-between self-center overflow-x-hidden  text-sm font-bold "
        )}
      >
        <div className="flex  items-center justify-start gap-28 ">
          <VoloroLogo className="w-28 h-28" />
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
          <Button text="Login" className="!px-6"/>
        </div>

      </div>
    </div>
  );
};
