import React from "react";
import PrimarySearch from "./PrimarySearch";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full h-[70vh] max-w-5xl">
      <p className="text-5xl font-semibold">every command ever!</p>
      <p className="text-md font-thin mt-6">
        I don&apos;t need to know everything, I just need to know where to find
        it, when I need it.
      </p>
      <PrimarySearch />
    </div>
  );
}
