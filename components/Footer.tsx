import Link from "next/link";
import Image from "next/image";

import linkedin from "@/public/assets/icons/linkedin.svg";
import github from "@/public/assets/icons/github.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import linkedin_white from "@/public/assets/icons/linkedin-white.svg";
import github_white from "@/public/assets/icons/github-white.svg";
import instagram_white from "@/public/assets/icons/instagram-white.svg";

interface FooterProps {
  menu: boolean;
}

const Footer = (props: FooterProps) => {
  return (
    <div
      className={`flex flex-grow-0 flex-shrink justify-end gap-5 mt-5 z-30 ${
        !props.menu && "px-10 py-8"
      }`}
    >
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/kylerpan/"
        className="flex flex-center"
      >
        <Image
          src={props.menu ? linkedin_white : linkedin}
          alt="Linkedin Logo"
          width={30}
          height={30}
          priority={true}
        />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/kylerpan"
        className="flex flex-center"
      >
        <Image
          src={props.menu ? github_white : github}
          alt="Github Logo"
          width={30}
          height={30}
          priority={true}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/kyle_pan_/"
        className="flex flex-center"
      >
        <Image
          src={props.menu ? instagram_white : instagram}
          alt="Instagram Logo"
          width={30}
          height={30}
          priority={true}
        />
      </Link>
    </div>
  );
};

export default Footer;
