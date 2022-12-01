import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const logo = require("../public/img/cmdr.png");
  const github = require("../public/img/github.png");
  return (
    <nav className="flex justify-between p-4 items-center w-full max-w-5xl">
      <Link href="/">
        <Image src={logo} alt="cmdr" className="w-12" />
      </Link>

      <a target="_blank" rel="noreferrer" href="https://github.com/ArunGovil">
        <Image
          src={github}
          alt="cmdr"
          className="w-8 h-8 bg-white rounded-md"
        />
      </a>
    </nav>
  );
}
