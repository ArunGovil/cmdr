import Image from "next/image";
import Link from "next/link";
import SecondarySearch from "./SecondarySearch";

interface HeaderProps {
  showSearch: boolean;
}

export default function Header({ showSearch }: HeaderProps) {
  const logo = require("../public/img/cmdr.png");
  return (
    <nav className="flex justify-between p-4 items-center w-full max-w-5xl">
      <Link href="/">
        <Image src={logo} alt="cmdr" className="w-12" />
      </Link>
      {showSearch && <SecondarySearch />}
      <a target="_blank" rel="noreferrer" href="https://github.com/ArunGovil">
        <p className="font-medium text-sm hover:text-orange-400">@github</p>
      </a>
    </nav>
  );
}
