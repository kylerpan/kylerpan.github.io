import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex flex-grow-0 flex-shrink flex-row justify-between w-full px-8 py-6">
      <Link href="/" className="text-5xl">
        KP
      </Link>
      <div className="flex items-center gap-8">
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
          className="text-lg text-white bg-black rounded-md py-1 px-3 text-center"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
