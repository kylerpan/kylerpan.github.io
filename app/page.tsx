import Intro from "../components/Intro";

export default function Home() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-col items-center justify-center p-10">
      <div className="flex flex-col z-10 h-full w-full items-center justify-center font-sans lg:flex gap-3">
        <Intro
          description="👋 Hey there, my name is Kyle and I am a"
          header="Software Developer"
          button="About me"
        />
      </div>
    </main>
  );
}
