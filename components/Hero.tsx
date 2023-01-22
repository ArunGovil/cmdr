import DemoSearch from "./DemoSearch";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full h-[70vh] max-w-5xl">
      <p className="text-5xl font-semibold">every command ever!</p>
      <p className="text-md font-thin mt-6 text-slate-200">
        You don&apos;t need to remember everything, you just need to know where
        to find it, when you need it.
      </p>
      <DemoSearch />
    </div>
  );
}
