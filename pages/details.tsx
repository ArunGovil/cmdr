import Head from "next/head";
import { useState } from "react";
import { Header, Footer, SearchListing, SecondarySearch } from "../components";
import content from "../content/content.json";

export default function Details() {
  const [data, setData] = useState(content);
  const filterData = (query: string) => {
    const filtered = content.filter((item: any) =>
      item.title.toLowerCase().includes(query)
    );
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
        <Footer />
      </main>
    </div>
  );
}
