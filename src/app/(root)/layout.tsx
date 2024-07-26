import Navbar from "@/components/shared/navbar/navbar";
import LeftSidebar from "@/components/shared/sidebar/left-side-bar";
import RightSidebar from "@/components/shared/sidebar/right-side-bar";
import React, { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-slate-200 dark:bg-gray-950 max-h-screen">
      <Navbar />
      <div className="flex justify-between ">
        <LeftSidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  );
};

export default layout;
