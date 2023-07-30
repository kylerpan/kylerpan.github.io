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
      className="relative flex text-white rounded-full h-full w-52 text-center justify-center items-center hover:text-black transition ease-in-out duration-500"
    >
      <Image
        src={props.imagePath}
        alt={props.id}
        fill={true}
        className="absolute rounded-full z-1"
        priority={true}
      />
      <div className="absolute bg-[#585858] rounded-full h-full w-full opacity-70 z-2 hover:bg-[#D4D4D4] hover:text-black transition ease-in-out duration-500" />
      <p className="text-2xl font-bold whitespace-pre-wrap z-10">
        {props.name}
      </p>
    </Link>
  );
};

export default Card;
