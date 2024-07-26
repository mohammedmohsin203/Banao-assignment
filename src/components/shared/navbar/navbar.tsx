import { SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import GlobalSearch from "../search/global-search";

const Navbar = () => {
  return (
    <nav className="justify-between flex bg-white dark:bg-black w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 z-50">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevOverflow"
        />
        <p className="font-bold text-black dark:text-white max-sm:hidden text-2xl">
          Dev<span className="text-orange-500 ">Overflow</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="justify-between flex gap-5 items-center ">
        <ModeToggle />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
