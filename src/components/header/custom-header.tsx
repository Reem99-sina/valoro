import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import { Button } from "../shared/button.component";
import { Menu } from "lucide-react";
import { Drawer } from "../shared/drawer";

interface DropdownItem {
  icon: string;
  label: string;
  href: string;
}

interface DropdownMenu {
  title: string;
  items: DropdownItem[];
}

const dropdowns: DropdownMenu[] = [
  //   {
  //     title: "AQL AI Models",
  //     items: [
  //       { icon: "/icons/llm.svg", label: "Large Language Model (LLM)", href: "/aql/llm" },
  //       { icon: "/icons/rag.svg", label: "Retrieval Augmented Generation (RAG)", href: "/aql/rag" },
  //       { icon: "/icons/ocr.svg", label: "Optical Character Recognition (OCR)", href: "/aql/ocr" },
  //       { icon: "/icons/tts.svg", label: "Text-to-Speech (TTS)", href: "/aql/tts" },
  //       { icon: "/icons/stt.svg", label: "Speech-to-Text (STT)", href: "/aql/stt" },
  //       { icon: "/icons/sentiment.svg", label: "Sentiment Analysis", href: "/aql/sentiment-analysis" },
  //     ],
  //   },
  //   {
  //     title: "Products",
  //     items: [
  //       { icon: "/icons/conversational.svg", label: "Conversational AI", href: "/products/conversational-ai" },
  //       { icon: "/icons/omnichannel.svg", label: "Omnichannel Inbox", href: "/products/omnichannel-inbox" },
  //     ],
  //   },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

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
    <header className="w-full bg-black text-white !mx-0">
      <div className=" flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-4xl  font-extrabold leading-tight drop-shadow-lg">
            {t("hero.name")}
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-row items-center gap-3 font-sans"
            >
              <Link
                href={link.to as string}
                className={clsx(
                  "relative text-sm  text-white  capitalize whitespace-nowrap"
                )}
              >
                {link.text}
              </Link>
              <div className="cursor-pointer" onClick={() => {}}></div>
            </div>
          ))}

          {dropdowns?.map((menu) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(menu.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-blue-400">
                {menu.title} <span>▼</span>
              </button>
              {activeDropdown === menu.title && (
                <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg w-64 p-4 grid gap-2">
                  {menu.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded"
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={20}
                        height={20}
                      />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div
          className="flex md:hidden cursor-pointer "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Menu size={27} />
        </div>
        <Button
          text="Request a Demo"
          className="!px-6 !bg-third-blue !text-four-blue !w-auto md:!flex hidden !rounded-xl !text-sm"
        />
        <Drawer
          open={open}
          onOpenChange={() => setOpen(!open)}
          side="left"
          className="bg-[#060413] !border-r-0"
        >
            <div className="flex flex-col gap-6 mt-10 px-4">
          <Link href="/" className="flex items-center">
            <h1 className="text-4xl  font-extrabold leading-tight drop-shadow-lg">
              {t("hero.name")}
            </h1>
          </Link>
          {links.map((link) => (
            <div
              key={link.id}
              className="flex flex-row items-center gap-3 font-sans"
            >
              <Link
                href={link.to as string}
                className={clsx(
                  "relative text-lg  text-white  capitalize whitespace-nowrap"
                )}
              >
                {link.text}
              </Link>
              <div className="cursor-pointer" onClick={() => {}}></div>
            </div>
          ))}
          <Button
            text="Request a Demo"
            className="!px-6 !bg-third-blue !text-four-blue !w-auto !text-sm"
          />
          </div>
        </Drawer>
      </div>
    </header>
  );
}
