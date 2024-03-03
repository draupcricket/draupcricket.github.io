"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-2xl font-semibold text-black dark:text-white">
              
              <span className="text-4xl md:text-[6rem] font-bold mt-4 leading-none ">
                DRAUP CRICKET TOURNAMENT
              </span>
            </h1>
            

          </>
        }
      />
    </div>
  );
}

export const users = [
  

];
