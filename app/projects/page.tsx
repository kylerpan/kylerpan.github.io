import Intro from "../../components/Intro";
import Card from "../../components/Card";

export default function Projects() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="Lets take a look at"
          header="My Projects"
          button="Learn more"
        />
        <div id="description" className="flex gap-12 mt-44">
          <Card
            imagePath="/assets/peterportal.png"
            name={"PeterPortal"}
            routeName="peterportal"
          />
          <Card
            imagePath="/assets/find_your_anchor.png"
            name={"Find\n Your\n Anchor"}
            routeName="find-your-anchor"
          />
          <Card
            imagePath="/assets/bar_path.png"
            name={"Bar\n Path\n Tracking"}
            routeName="bar-path"
          />
          <Card
            imagePath="/assets/ups_healthcare.png"
            name={"UPS\n Healthcare\n Onboarding\n Portal"}
            routeName="ups-healthcare"
          />
        </div>
      </div>
    </main>
  );
}
