import Link from "next/link";
import React, { useEffect, useState } from "react";
import { placeholders } from "../json";
import content from "../content/content.yaml";

export default function PrimarySearch() {
  const [data, setData] = useState(content);
  const [query, setQuery] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState(placeholders[0]);

  const filterData = (query: string) => {
    setQuery(query);
    const filtered = content.filter((item: any) =>
      item.title.toLowerCase().includes(query)
    );
    setData(filtered);
  };

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
        {data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li
                className="mt-2 text-sm font-light text-slate-400 cursor-pointer hover:text-white hover:bg-gradient-to-br from-[#FF4D4D] to-orange-500 pt-1 pb-1 pl-1 rounded-md"
                key={item.id}
              >
                {item.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm font-light text-slate-400 cursor-pointer pt-1 pb-1 pl-1 rounded-md">
            no commands found
          </p>
        )}
      </div>
    );
  };
  return (
    <div>
      <div className="mt-12 flex">
        <input
          onChange={(e) => filterData(e.target.value)}
          className="bg-black border-l border-r border-t border-b rounded-l-lg p-2 border-slate-800 h-12 w-96 max-w-[75vw] text-sm"
          placeholder={placeholder.placeholder}
        />
        <Link
          href="/details"
          className="p-2 flex items-center justify-center cursor-pointer bg-gradient-to-br from-[#FF4D4D] to-orange-500 rounded-r-lg text-sm pl-3 pr-3"
        >
          <p>search</p>
        </Link>
      </div>
      {isVisible && returnSuggestions()}
    </div>
  );
}
