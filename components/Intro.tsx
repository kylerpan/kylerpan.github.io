interface Props {
  description: string;
  header: string;
  button: string;
}

const Intro = (props: Props) => {
  return (
    <div className="flex flex-col w-full items-center text-center gap-5">
      <p className="text-2xl">{props.description}</p>
      <h1 className="text-9xl">{props.header}</h1>
      <button className="mt-16 text-base text-white bg-black w-fit rounded-md py-2 px-3 text-center">
        {props.button}
      </button>
    </div>
  );
};

export default Intro;
