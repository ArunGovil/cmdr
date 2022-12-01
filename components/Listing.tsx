import React, { useState, useEffect } from "react";
import { technology, codes } from "../json";
import CodeCard from "./CodeCard";

export default function Listing() {
  const [currentTab, setCurrentTab] = useState(1);
  const [code, setCode] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [currentTab]);

  const fetchData = () => {
    const res = codes.filter(
      (item) => item.technology == codes[currentTab - 1].technology
    );
    setCode(res);
    setLoading(false);
  };

  const returnNotFound = () => {
    return (
      <div>
        <p>Not Found</p>
      </div>
    );
  };

  const returnLoading = () => {
    return (
      <div>
        <p>Loading..</p>
      </div>
    );
  };

  const returnResult = () => {
    return (
      <div>
        {code.length > 0 ? (
          <ul className="p-2 mb-8">
            {code.map((item: any) => (
              <CodeCard
                key={item.id}
                id={item.id}
                title={item.title}
                code={item.code}
              />
            ))}
          </ul>
        ) : (
          returnNotFound()
        )}
      </div>
    );
  };

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
        {isLoading ? returnLoading() : returnResult()}
      </section>
    </div>
  );
}
