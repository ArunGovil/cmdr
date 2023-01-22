import Head from "next/head";
import { useState, useContext } from "react";
import {
  Header,
  Footer,
  SearchListing,
  SecondarySearch,
  NotificationBadge,
} from "../components";
import content from "../content/content.json";
import { Notification } from "../context/NotificationContext";

export default function Details() {
  const { notification } = useContext(Notification);
  const [data, setData] = useState(content);
  const filterData = (query: string) => {
    const filtered = content.filter((item: any) => {
      const keyword = query.toLowerCase();
      const result =
        item.title.toLowerCase().includes(keyword) ||
        item.code.toLowerCase().includes(keyword) ||
        item.technology.toLowerCase().includes(keyword);
      return result;
    });
    setData(filtered);
  };

  return (
    <div>
      <Head>
        <title>cmdr / one stop directory</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <Header />
        <SecondarySearch onChange={filterData} />
        <SearchListing searchData={data} />
        {notification && <NotificationBadge />}
        <Footer />
      </main>
    </div>
  );
}
