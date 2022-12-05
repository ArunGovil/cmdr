import React, { useState, useEffect } from "react";
import { technology, codes } from "../json";
import CodeCard from "./CodeCard";
import content from "../content/content.yaml";
import tabs from "../content/tabs.yaml";

export default function SearchListing() {
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
    <div className="flex flex-col justify-center items-center p-4 w-full min-h-[90vh] max-w-5xl mt-2">
      <section className="mt-8 w-full">
        {isLoading ? returnLoading() : returnResult()}
      </section>
    </div>
  );
}
