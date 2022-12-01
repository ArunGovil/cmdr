import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full h-[70vh] max-w-5xl">
      <p className="text-5xl font-semibold">every command ever!</p>
      <p className="text-md font-thin mt-6">
        we curate every command you will ever need.
      </p>
      <div className="mt-12 flex">
        <input
          className="bg-black border p-2 border-orange-500 rounded-md h-12 w-96"
          placeholder="find commands"
        />
        <div className="p-2 flex items-center justify-center cursor-pointer bg-orange-500 border-l-0 rounded-md">
          search
        </div>
      </div>
    </div>
  );
}
