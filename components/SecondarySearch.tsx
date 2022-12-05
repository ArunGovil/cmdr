import Link from "next/link";
import React, { useEffect, useState } from "react";
import { technology, placeholders } from "../json";

export default function SecondarySearch() {
  const [query, setQuery] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  useEffect(() => {
    if (query.length > 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [query]);

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

  const returnSuggestions = () => {
    return (
      <div className="bg-black border p-2 border-slate-800 mt-1 rounded-md w-96 z-50 absolute">
        <ul>
          {technology.map((item) => (
            <li
              className="mt-2 text-sm font-light text-slate-400 cursor-pointer hover:text-white hover:bg-gradient-to-br from-[#FF4D4D] to-orange-500 pt-1 pb-1 pl-1 rounded-md"
              key={item.id}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div>
      <div className="mt-0 flex">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="bg-black border-l border-r border-t border-b rounded-l-lg p-2 border-slate-800 h-12 w-96 max-w-[75vw] text-sm"
          placeholder={placeholder.placeholder}
        />
        <div className="p-2 flex items-center justify-center cursor-pointer bg-gradient-to-br from-[#FF4D4D] to-orange-500 rounded-r-lg text-sm pl-3 pr-3">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
      {isVisible && returnSuggestions()}
    </div>
  );
}
