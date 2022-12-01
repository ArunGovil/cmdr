import React, { useState, useEffect } from "react";
import { technology, codes } from "../json";

export default function Listing() {
  const [currentTab, setCurrentTab] = useState(1);
  const [code, setCode] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const res = codes.filter(
      (item) => item.technology == codes[currentTab - 1].technology
    );
    setCode(res);
  }, [currentTab]);

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full max-w-5xl mt-12">
      <nav>
        <ul className="flex">
          {technology.map((item) => (
            <li
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={
                item.id == currentTab
                  ? "cursor-pointer p-2 mr-2 border-b-2 border-orange-500"
                  : "cursor-pointer p-2 mr-2 border-none"
              }
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <section className="mt-12 w-full">
        {code.length > 0 ? (
          <ul className="p-2 mb-8">
            {code.map((item: any) => (
              <li key={item.id}>
                <p className="mt-8 mb-8">{item.title}</p>
                <code className="bg-slate-600 p-4 rounded-md">{item.code}</code>
              </li>
            ))}
          </ul>
        ) : (
          <p>Not Found</p>
        )}
      </section>
    </div>
  );
}
