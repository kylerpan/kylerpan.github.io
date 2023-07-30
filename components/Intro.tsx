import Link from "next/link";

interface IntroProps {
  description: string;
  header: string;
  button: string;
}

const Intro = (props: IntroProps) => {
  return (
    <div className="flex flex-col w-full items-center text-center gap-5">
      <p className="text-xl whitespace-pre-wrap lg:text-2xl lg:whitespace-nowrap">
        {props.description}
      </p>
      <h1 className="text-6xl lg:text-9xl">{props.header}</h1>
      {props.button == "Learn more" && (
        <a
          href="#description"
          className="mt-16 text-base text-white bg-black w-fit rounded-md py-2 px-3 text-center"
        >
          Learn more
        </a>
      )}
      {props.button == "Download" && (
        <a
          target="_blank"
          href="/assets/Kyle Pan Resume.pdf"
          className="mt-16 text-base text-white bg-black w-fit rounded-md py-2 px-3 text-center"
        >
          Download
        </a>
      )}
      {props.button == "About me" && (
        <Link
          href="/about"
          className="mt-16 text-base text-white bg-black w-fit rounded-md py-2 px-3 text-center"
        >
          About me
        </Link>
      )}
    </div>
  );
};

export default Intro;
