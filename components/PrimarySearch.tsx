import React, { useEffect, useState } from "react";
import { technology, placeholders } from "../json";

export default function PrimarySearch() {
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
              className="mt-2 text-sm font-light text-slate-400 cursor-pointer hover:text-white hover:bg-orange-500 pt-1 pb-1 pl-1 rounded-md"
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
      <div className="mt-12 flex">
        <input
          onChange={(e) => setQuery(e.target.value)}
          className="bg-black border-l border-r border-t border-b rounded-l-lg p-2 border-slate-800 h-12 w-96 text-sm"
          placeholder={placeholder.placeholder}
        />
        <div className="p-2 flex items-center justify-center cursor-pointer bg-orange-500 rounded-r-lg text-sm pl-3 pr-3">
          search
        </div>
      </div>
      {isVisible && returnSuggestions()}
    </div>
  );
}
