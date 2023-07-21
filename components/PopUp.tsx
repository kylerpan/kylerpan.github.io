import Link from "next/link";

import Card from "./Card";
import work from "@/public/assets/work.json";
import projects from "@/public/assets/projects.json";

interface PopUpProps {
  index: number;
  route: string;
}

const PopUp = (props: PopUpProps) => {
  var data: any = props.route == "/work/" ? work : projects;
  var location: string = data[props.index].location
    .split(", ")[0]
    .replace(" ", "_")
    .toLowerCase();

  return (
    <div
      style={{
        backgroundImage: `url(/assets/backgrounds/${location}.png)`,
      }}
      className={`flex flex-col items-center absolute top-0 left-0 w-full h-full bg-white`}
    >
      <div className="flex flex-col m-32 gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-7xl font-bold">{data[props.index].name}</h1>
          <Link
            href={props.route.slice(0, -1)}
            className="text-5xl font-bold ml-5"
          >
            &#10005;
          </Link>
        </div>
        <p className="text-3xl">{data[props.index].position}</p>
        <p>
          {data[props.index].location} {data[props.index].date}
        </p>
        <p className="text-xl">{data[props.index].description}</p>
        <p className="text-xl font-bold">Skills Used</p>
        <p>{data[props.index].skills}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Other Work</h2>
        <div id="description" className="flex gap-12 mt-16 h-96">
          {data.map((data: any, i: number) => {
            if (i != props.index) {
              return (
                <Card
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  imagePath={data.imagePath}
                  route={props.route}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
