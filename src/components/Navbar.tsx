import { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex flex-wrap items-center bg-slate-200 p-3">
      <a href="/" className="mr-4 inline-flex items-center p-2">
        <span className="text-xl font-bold uppercase">Logo</span>
      </a>
      <BurgerMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <div
        className={`w-full md:inline-flex md:w-auto md:flex-grow ${
          isNavOpen ? "" : "hidden"
        }`}
      >
        <div className="flex w-full flex-col items-start md:ml-auto md:inline-flex md:h-auto md:w-auto md:flex-row md:items-center">
          <a
            href="/"
            className="w-full items-center justify-center rounded px-3 py-2 text-center transition hover:bg-gray-700 hover:text-white md:inline-flex md:w-auto"
          >
            <span>Home</span>
          </a>

          <a
            href="/"
            className="w-full items-center justify-center rounded px-3 py-2 text-center transition hover:bg-gray-700 hover:text-white md:inline-flex md:w-auto"
          >
            <span>O mnie</span>
          </a>

          <a
            href="/"
            className="w-full items-center justify-center rounded px-3 py-2 text-center transition hover:bg-gray-700 hover:text-white md:inline-flex md:w-auto"
          >
            <span>Galeria</span>
          </a>

          <a
            href="/"
            className="w-full items-center justify-center rounded px-3 py-2 text-center transition hover:bg-gray-700 hover:text-white md:inline-flex md:w-auto"
          >
            <span>Kontakt</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
