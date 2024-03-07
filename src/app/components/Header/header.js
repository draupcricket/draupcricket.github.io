"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <div className="font-semibold text-black dark:text-white">
            <span className="">Uniting Teams, Igniting passion!</span>
              <h1 className="text-4xl md:text-[6rem] font-bold mt-4 leading-none ">
                DRAUP CRICKET TOURNAMENT
              </h1>
            </div>
            

          </>
        }
      />
    </div>
  );
}

export const users = [
  

];
