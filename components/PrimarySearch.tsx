import React, { useEffect, useState } from "react";
import { technology } from "../json";

export default function PrimarySearch() {
  const [query, setQuery] = useState("");
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [query]);
  const returnSuggestions = () => {
    return (
      <div className="bg-black border p-2 border-white border-t-0 rounded-md w-96 z-50 absolute">
        <ul>
          {technology.map((item) => (
            <li className="mt-2" key={item.id}>
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
          className="bg-black border p-2 border-orange-500 rounded-md h-12 w-96"
          placeholder="find commands"
        />
        <div className="p-2 flex items-center justify-center cursor-pointer bg-orange-500 border-l-0 rounded-md">
          search
        </div>
      </div>
      {isVisible && returnSuggestions()}
    </div>
  );
}
