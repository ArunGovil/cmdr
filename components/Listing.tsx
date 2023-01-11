import React, { useState, useEffect, useRef } from "react";
import CodeCard from "./CodeCard";
import content from "../content/content.json";
import { tabs } from "../utils";
import AddNew from "./AddNew";

interface tabData {
  id: number;
  title: string;
}

export default function Listing() {
  const [currentTab, setCurrentTab] = useState({ id: 1, title: "reactjs" });
  const [code, setCode] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const switchTab = (item: tabData) => {
    setCurrentTab(item);
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
      <div className="min-h-[50vh] flex justify-center items-center w-full">
        {code.length > 0 ? (
          <ul className="mb-8 w-full">
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
          <AddNew />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 w-full max-w-5xl mt-8">
      <nav ref={sectionRef} className="pt-4">
        <ul className="flex">
          {tabs.length > 0 &&
            tabs.map((item) => (
              <li
                key={item.id}
                onClick={() => switchTab(item)}
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
