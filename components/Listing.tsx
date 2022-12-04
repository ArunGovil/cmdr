import React, { useState, useEffect } from "react";
import { technology, codes } from "../json";
import CodeCard from "./CodeCard";
import content from "../content/content.yaml";
import tabs from "../content/tabs.yaml";

export default function Listing() {
  const [currentTab, setCurrentTab] = useState({ id: 1, title: "reactJs" });
  const [code, setCode] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [currentTab]);

  const fetchData = async () => {
    const data = content.filter((item) => {
      return item.technology == currentTab.title;
    });
    setCode(data);
    setLoading(false);
  };

  const returnNotFound = () => {
    return (
      <div className="text-center">
        <p className="font-thin">No Result Found</p>
      </div>
    );
  };

  const returnLoading = () => {
    return (
      <div className="text-center">
        <p className="font-thin">Loading..</p>
      </div>
    );
  };

  const returnResult = () => {
    return (
      <div>
        {code.length > 0 ? (
          <ul className="mb-8">
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
    <div className="flex flex-col justify-center items-center p-4 w-full max-w-5xl mt-8">
      <nav>
        <ul className="flex">
          {tabs.length > 0 &&
            tabs.map((item) => (
              <li
                key={item.id}
                onClick={() => setCurrentTab(item)}
                className={
                  item.title == currentTab.title
                    ? "cursor-pointer p-2 mr-2 border-b-2 border-orange-500"
                    : "cursor-pointer p-2 mr-2 border-none"
                }
              >
                {item.title}
              </li>
            ))}
        </ul>
      </nav>
      <section className="mt-8 w-full">
        {isLoading ? returnLoading() : returnResult()}
      </section>
    </div>
  );
}
