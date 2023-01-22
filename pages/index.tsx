import Head from "next/head";
import { useContext } from "react";
import { Header, Hero, Listing, About, Footer, NotificationBadge } from "../components";
import { Notification } from "../context/NotificationContext";

export default function Home() {
  const {notification} = useContext(Notification);
  return (
    <div>
      <Head>
        <title>cmdr / one stop directory</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex flex-col items-center">
        <Header />
        <Hero />
        <Listing />
        <About />
        <Footer />
        {notification && <NotificationBadge />}
      </main>
    </div>
  );
}
