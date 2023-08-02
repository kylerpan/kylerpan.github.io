import Image from "next/image";
import Link from "next/link";

interface CardProps {
  id: string;
  name: string;
  imagePath: string;
  route: string;
}

const Card = (props: CardProps) => {
  return (
    <Link
      href={props.route + props.id}
      className="relative flex text-white h-52 w-full text-center justify-center items-center lg:rounded-full lg:h-[35rem] lg:w-52 hover:text-black transition ease-in-out duration-500"
    >
      {/* TODO: make the pictures not look ugly and stretched out */}
      <Image
        src={props.imagePath}
        alt={props.id}
        fill={true}
        className="absolute z-1 lg:rounded-full"
        priority={true}
      />
      <div className="absolute bg-[#585858] h-full w-full opacity-70 z-2 lg:rounded-full hover:bg-[#D4D4D4] hover:text-black transition ease-in-out duration-500" />
      <p className="text-2xl font-bold whitespace-pre-wrap z-10">
        {props.name}
      </p>
    </Link>
  );
};

export default Card;
