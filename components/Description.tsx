import Link from "next/link";

interface DescriptionProps {
  position: string;
  date: string;
  location: string;
  description: string;
  skills: Array<string>;
  link: string;
}

const Description = (props: DescriptionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl">{props.position}</p>
      <p>
        {props.date} &#x2022; {props.location}
      </p>
      <p className="text-xl">{props.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">Skills Used</p>
          <div className="flex gap-5">
            {props.skills.map((skill: string) => (
              <p className="text-xl">{skill}</p>
            ))}
          </div>
        </div>
        {props.link != "" && (
          <Link
            href={props.link}
            target="_blank"
            className="text-lg text-white bg-black rounded-md py-2 px-3 h-fit w-fit text-center"
          >
            Github
          </Link>
        )}
      </div>
    </div>
  );
};

export default Description;
