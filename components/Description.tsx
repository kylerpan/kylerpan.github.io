interface DescriptionProps {
  position: string;
  date: string;
  location: string;
  description: string;
  skills: Array<string>;
}

const Description = (props: DescriptionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl">{props.position}</p>
      <p>
        {props.date} &#x2022; {props.location}
      </p>
      <p className="text-xl">{props.description}</p>
      <div>
        <p className="text-xl font-bold">Skills Used</p>
        <div className="flex gap-5">
          {props.skills.map((skill: string) => (
            <p className="text-xl">{skill}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
