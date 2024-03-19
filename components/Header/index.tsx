import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="bg-ctp-crust">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="w-full p-3 flex items-center justify-between">
          <Link href="/" className="font-bold text-3xl">
            Git<span className="text-ctp-rosewater">Finder</span>
          </Link>
          <div className="flex items-center gap-5">
            <SearchInput />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
