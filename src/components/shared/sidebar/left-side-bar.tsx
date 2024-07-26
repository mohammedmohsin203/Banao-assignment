"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { sidebarLinks } from "../../../../constants";

type Props = {};

const LeftSidebar = (props: Props) => {
  const pathname = usePathname();
  return (
    <section className="bg-white dark:bg-black border-slate-200 sticky left-0 top-0 flex max-h-screen flex-col justify-between overflow-y-auto border-r p-6  shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[350px] no-scrollbar">
      <div className="flex h-full flex-col gap-4 pt-16">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) || pathname == item.route;
          return (
            <Link
              href={item.route}
              key={item.route}
              className={`${isActive ? "bg-orange-500 rounded-lg text-white" : "text-black dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"} flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "font-bold text-xl" : "font-normal"}`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSidebar;
