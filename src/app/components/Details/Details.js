"use client";
import React from "react";
import { IconCalendarEvent, IconCup, IconUser } from "@tabler/icons-react";
export function Details() {
  return (
    <div>


      <div className="mb-8 md:mb-32 md:flex justify-between gap-10 text-left lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
 
        >
          <h2 className={`mb-3 text-2xl font-semibold flex gap-4`}>
            Venue{" "}

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            St Johns Cricket Ground.
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
 
        >
          <h2 className={`mb-3 text-2xl font-semibold flex gap-4`}>
            Date  {" "}

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            16th March, 2024
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
 
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Time{" "}

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             07 : 00 to 16 : 30
          </p>
        </div>


      </div>
      </div>
  )
}
