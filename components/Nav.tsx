"use client";

import { useState } from "react";
import Link from "next/link";

import Hamburger from "./Hamburger";
import Footer from "./Footer";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  menu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav
      className={`flex flex-grow-0 flex-shrink flex-row justify-between items-center w-full px-10 py-8 ${
        menu ? "h-lvh" : ""
      }`}
    >
      <Link href="/" className="hidden lg:text-5xl">
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
        <div className="flex w-full justify-between items-center">
          <Link
            href="/"
            className={`z-30 text-5xl ${menu ? "text-white" : "text-black"}`}
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
              className="text-white z-30 text-5xl"
              onClick={() => setMenu(!menu)}
            >
              Work
            </Link>
            <Link
              href="/projects"
              className="text-white z-30 text-5xl"
              onClick={() => setMenu(!menu)}
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="text-white z-30 text-5xl"
              onClick={() => setMenu(!menu)}
            >
              Resume
            </Link>
            <Link
              href="/about"
              className="text-white z-30 text-5xl"
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
