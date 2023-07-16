import Image from "next/image";
import Link from "next/link";

interface Props {
  imagePath: string;
  name: string;
  routeName: string;
}

const Card = (props: Props) => {
  return (
    <Link
      href={"/work/" + props.routeName}
      className="relative flex text-white rounded-full h-[30rem] w-48 text-center justify-center items-center hover:text-black transition ease-in-out duration-500"
    >
      <Image
        src={props.imagePath}
        alt={props.routeName}
        fill={true}
        className="absolute rounded-full z-1"
      />
      <div className="absolute bg-[#585858] rounded-full h-full w-full opacity-70 z-2 hover:bg-[#D4D4D4] hover:text-black transition ease-in-out duration-500" />
      <p className="text-2xl font-bold whitespace-pre-wrap z-10">
        {props.name}
      </p>
    </Link>
  );
};

export default Card;
