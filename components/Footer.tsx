import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const logo = require("../public/img/cmdr.png");
  return (
    <nav className="flex justify-between p-4 items-center w-full max-w-5xl mt-8">
      <Link href="/">
        <Image src={logo} alt="cmdr" className="w-12" />
      </Link>

      <a target="_blank" rel="noreferrer" href="https://github.com/ArunGovil">
        <p className="font-medium text-sm hover:text-orange-400">@arungovil</p>
      </a>
    </nav>
  );
}
