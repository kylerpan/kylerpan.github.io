import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-end gap-5 px-8 py-6">
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/kylerpan/"
        className="flex flex-center"
      >
        <Image
          src="/assets/linkedin.png"
          alt="Linkedin Logo"
          width={30}
          height={30}
        />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/kylerpan"
        className="flex flex-center"
      >
        <Image
          src="/assets/github.png"
          alt="Github Logo"
          width={30}
          height={30}
        />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/kyle_pan_/"
        className="flex flex-center"
      >
        <Image
          src="/assets/instagram.png"
          alt="Instagram Logo"
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
};

export default Footer;
