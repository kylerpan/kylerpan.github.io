"use client";

import Link from "next/link";

import Card from "./Card";
import Description from "./Description";
import work from "@/public/assets/work.json";
import projects from "@/public/assets/projects.json";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

interface PopUpProps {
  index: number;
  route: string;
}

const PopUp = (props: PopUpProps) => {
  var datas: any = props.route == "/work/" ? work : projects;
  var data: any = datas[props.index];
  var link: string = data.link ?? "";
  var location: string = data.location
    .split(", ")[0]
    .replace(" ", "_")
    .toLowerCase();

  return (
    <div
      style={{
        backgroundImage: `url(/assets/backgrounds/${location}.png)`,
      }}
      className={`flex flex-col px-12 items-center absolute top-0 left-0 w-full h-fit bg-white bg-cover z-40 lg:px-32`}
    >
      <div className="flex flex-col mt-14 mb-32 gap-5 w-full h-fit lg:mt-20">
        <div className="flex justify-between items-center w-full">
          <h1 className="flex text-4xl font-bold flex-wrap lg:text-7xl">
            {data.name}
          </h1>
          <Link
            href={props.route.slice(0, -1)}
            className="text-4xl font-bold ml-5 lg:text-5xl"
          >
            &#10005;
          </Link>
        </div>
        {data.date.length == 1 ? (
          <Description
            position={data.position}
            date={data.date}
            location={data.location}
            description={data.description}
            skills={data.skills[0]}
            link={link}
          />
        ) : (
          <Timeline className="flex justify-self-start !p-0 gap-5">
            {Array.from({ length: data.date.length }).map(
              (el: any, i: number) => (
                <TimelineItem key={i}>
                  <TimelineOppositeContent className="!flex-none !p-0" />
                  <TimelineSeparator>
                    <TimelineDot />
                    {i != data.date.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Description
                      position={data.position[i]}
                      date={data.date[i]}
                      location={data.location}
                      description={data.description[i]}
                      skills={data.skills[i]}
                      link={link}
                    />
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        )}
      </div>
      <div className="flex flex-col items-center mb-20 h-fit">
        <a href="#others" className="text-3xl font-bold lg:text-4xl">
          Other Work
        </a>
        <div
          id="others"
          className="flex gap-6 mt-16 flex-wrap justify-center lg:gap-12"
        >
          {datas.map((data: any, i: number) => {
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
