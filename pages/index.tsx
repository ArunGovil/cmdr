import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>cmdr / one stop shop</title>
        <meta name="description" content="jack of all commands" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main className="flex items-center justify-center h-screen">
        <p className="font-medium text-2xl">cmdr</p>
      </main>
    </div>
  );
}
