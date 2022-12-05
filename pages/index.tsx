import Head from "next/head";
import { Header, Hero, Listing, About, Footer } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>cmdr / one stop directory</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <Header showSearch={false} />
        <Hero />
        <Listing />
        <About />
        <Footer />
      </main>
    </div>
  );
}
