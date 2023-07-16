import Intro from "../../components/Intro";
import Card from "../../components/Card";

export default function Work() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="Lets take a look at"
          header="My Work Experience"
          button="Learn more"
        />
        <div id="description" className="mt-96">
          <Card
            imagePath="/assets/ups.png"
            name={"United\n Parcel\n Service"}
            routeName="/work/ups"
          />
        </div>
      </div>
    </main>
  );
}
