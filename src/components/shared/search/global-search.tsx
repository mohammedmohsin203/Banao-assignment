"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
    
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="bg-gray-100 dark:bg-gray-900 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ">
        <Image
          src="/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search anything globally..."
          value=""
          onChange={() => {}}
          className="text-sm bg-gray-100 dark:bg-gray-900 shadow-none ml-2"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
