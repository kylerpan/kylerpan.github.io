"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Hamburger from "./Hamburger";
import Footer from "./Footer";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  return (
    <nav
      className={`flex flex-grow-0 flex-shrink flex-row justify-between items-center w-full px-10 py-8 ${
        menu && "h-lvh"
      }`}
    >
      <Link href="/" className={`text-5xl ${menu && "hidden"}`}>
        KP
      </Link>
      {/* For desktop nav bar */}
      <div className="hidden lg:flex lg:items-center lg:gap-8">
        <Link href="/work" className="text-lg">
          Work
        </Link>
        <Link href="/projects" className="text-lg">
          Projects
        </Link>
        <Link href="/resume" className="text-lg">
          Resume
        </Link>
        <Link href="/about" className="text-lg">
          About
        </Link>
        <a
          href="mailto:kylerpan691@gmail.com"
          className="text-lg text-white bg-black rounded-md py-2 px-3 text-center"
        >
          Contact
        </a>
      </div>
      {/* For mobile menu */}
      <div className="flex flex-grow-0 flex-shrink flex-col w-full h-full justify-between lg:hidden">
        <div
          className={`flex w-full items-center ${
            menu ? "justify-between" : "justify-end"
          }`}
        >
          <Link
            href="/"
            className={`z-30 text-5xl decoration-8 ${
              menu ? "text-white" : "hidden"
            }  ${pathname == "/" && menu && "line-through"}`}
            onClick={() => (menu ? setMenu(!menu) : null)}
          >
            KP
          </Link>
          <Hamburger menu={menu} setMenu={setMenu} />
        </div>

        {menu && (
          <div className="flex flex-grow flex-shrink justify-end flex-col gap-7 pb-24">
            <div className="bg-black fixed h-lvh w-lvw top-0 left-0 z-20" />
            <Link
              href="/work"
              className={`text-white z-30 text-5xl decoration-8 ${
                pathname == "/work" && "line-through"
              }`}
              onClick={() => setMenu(!menu)}
            >
              Work
            </Link>
            <Link
              href="/projects"
              className={`text-white z-30 text-5xl decoration-8 ${
                pathname == "/projects" && "line-through"
              }`}
              onClick={() => setMenu(!menu)}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className={`text-white z-30 text-5xl decoration-8 ${
                pathname == "/resume" && "line-through"
              }`}
              onClick={() => setMenu(!menu)}
            >
              Resume
            </Link>
            <Link
              href="/about"
              className={`text-white z-30 text-5xl decoration-8 ${
                pathname == "/about" && "line-through"
              }`}
              onClick={() => setMenu(!menu)}
            >
              About
            </Link>
            <a
              href="mailto:kylerpan691@gmail.com"
              className="text-white z-30 text-5xl"
            >
              Contact
            </a>
          </div>
        )}

        {menu && <Footer menu={true} />}
      </div>
    </nav>
  );
};

export default Nav;
