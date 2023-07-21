import Link from "next/link";

interface NotFoundProps {
  page: string;
}

const NotFound = (props: NotFoundProps) => {
  return (
    <div className="flex flex-grow flex-shrink flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
      <h1 className="text-9xl bold">Oopsie</h1>
      <h2 className="text-7xl bold">{props.page} Not Found</h2>
      <Link
        href="/"
        className="mt-8 text-base text-white bg-black w-fit rounded-md py-2 px-3 text-center"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
