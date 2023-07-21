import Intro from "@/components/Intro";
import Card from "@/components/Card";
import work from "@/public/assets/work.json";

export default function Work() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="Lets take a look at"
          header="My Work Experience"
          button="Learn more"
        />
        <div id="description" className="flex gap-12 mt-44 h-[35rem]">
          {work.map((work) => (
            <Card
              key={work.id}
              id={work.id}
              name={work.name}
              imagePath={work.imagePath}
              route="/work/"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
