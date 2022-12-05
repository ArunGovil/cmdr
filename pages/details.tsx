import Head from "next/head";
import { Header, Footer, SearchListing, SecondarySearch } from "../components";

export default function Details() {
  return (
    <div>
      <Head>
        <title>cmdr / one stop directory</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <Header showSearch={false} />
        <SecondarySearch />
        <SearchListing />
        <Footer />
      </main>
    </div>
  );
}
