import Intro from "@/components/Intro";
import Card from "@/components/Card";
import projects from "@/public/assets/projects.json";

export default function Projects() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="Lets take a look at"
          header="My Projects"
          button="Learn more"
        />
        <div id="description" className="flex gap-12 mt-32 h-[35rem]">
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              name={project.name}
              imagePath={project.imagePath}
              route="/projects/"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
