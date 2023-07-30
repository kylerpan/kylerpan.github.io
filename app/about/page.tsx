import Image from "next/image";

import Intro from "../../components/Intro";

export default function About() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="Lets take a look at"
          header="My Background"
          button="Learn more"
        />
        <div id="description" className="flex flex-col w-2/4 gap-12 mt-32">
          <Image
            src="/assets/images/wallpaper.jpg"
            alt="About me picture"
            height={500}
            width={500}
            className="w-full"
            priority={true}
          />
          <div className="flex flex-col gap-5">
            <p className="font-bold text-4xl">
              I am a student at UCI and a software developer.
            </p>
            <p className="text-xl">
              Thanks for taking the time to learn more about me! I was born and
              raised in San Diego, hence most of the background being a
              topological map of San Diego.
              <br />
              <br />
              I love listening to R&B music, learning new skills, and messing
              around with friends in my free time. But what I love the most is
              exercising &#40;weightlifting, running, and badminton&#41;:
              weightlifting for the intensity, running for the solitude, and
              badminton for the competition. I could probably write a whole page
              about exercising, but I&apos;ll cut it short.
              <br />
              <br />
              Feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
