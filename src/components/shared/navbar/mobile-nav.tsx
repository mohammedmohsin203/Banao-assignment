"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { SignedIn } from "@clerk/clerk-react";
import { sidebarLinks } from "../../../../constants";

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-4 pt-16 ">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${isActive ? "bg-orange-500 rounded-lg text-white" : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg"
              } flex items-center justify-start gap-4 bg-transparent p-4 `}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "font-bold text-xl" : "font-normal"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="bg-orange-400 rounded-lg fill-black p-2 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-white dark:bg-black border-none">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.svg"
            width={23}
            height={23}
            alt="DevOverflow"
          />
          <p className="text-2xl font-bold text-orange-500">
            Dev<span className="text-black dark:text-white">Overflow</span>
          </p>
        </Link>
        <div className="flex justify-between flex-col h-full pb-8">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="flex flex-col gap-3 ">
              <SheetClose>
                <Link href="/sign-in">
                  <Button
                    className="min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                    variant="outline"
                    size="lg"
                  >
                    <span className="text-black dark:text-white">Log In</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button
                    className=" border-2  text-black dark:text-white min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                    size="lg"
                    variant="outline"
                  >
                    Sign up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
          <div className="flex flex-col gap-3  ">
            <SignedIn>
            <SheetClose asChild>
              <SignOutButton>
                <Button
                  className=" border-2  text-black dark:text-white min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                  size="lg"
                  variant="outline"
                >
                  Log Out
                </Button>
              </SignOutButton>
            </SheetClose>
            </SignedIn>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
