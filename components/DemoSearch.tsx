import Link from "next/link";
import React, { useEffect, useState } from "react";
import { placeholders } from "../utils";
import { useRouter } from "next/router";

export default function DemoSearch() {
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/search");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (placeholder.id < placeholders.length) {
        setPlaceholder(placeholders[placeholder.id]);
      } else {
        setPlaceholder(placeholders[0]);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [placeholder]);

  return (
    <div>
      <div className="mt-12 flex">
        <input
          onFocus={handleNavigation}
          className="bg-black border-l border-r border-t border-b rounded-l-lg p-2 border-slate-800 h-12 w-96 max-w-[75vw] text-sm"
          placeholder={placeholder.placeholder}
        />
        <div className="p-2 flex items-center justify-center  bg-gradient-to-br from-[#FF4D4D] to-orange-500 rounded-r-lg text-sm pl-3 pr-3">
          <p>search</p>
        </div>
      </div>
    </div>
  );
}
