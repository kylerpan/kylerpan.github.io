import Image from "next/image";

import Intro from "@/components/Intro";

export default function Resume() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="Lets take a look at"
          header="My Resume"
          button="Download"
        />
        <div id="description" className="flex gap-12 mt-32">
          <Image
            src="/assets/resume.png"
            alt="resume"
            height={500}
            width={1000}
            className="flex"
          />
        </div>
      </div>
    </main>
  );
}
