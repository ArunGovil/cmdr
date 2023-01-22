import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const logo = require("../public/img/cmdr.png");
  return (
    <nav className="flex justify-between p-4 items-center w-full max-w-5xl">
      <Link href="/">
        <Image src={logo} alt="cmdr" className="w-12" />
      </Link>

      <a rel="noreferrer" href="https://github.com/ArunGovil/cmdr">
        <p className="font-medium text-sm hover:text-orange-400">@github</p>
      </a>
    </nav>
  );
}
