interface HamburgerProps {
  menu: boolean;
  setMenu: any;
}

const Hamburger = (props: HamburgerProps) => {
  const bar1: string = "origin-top-right -rotate-45 bg-white";
  const bar2: string = "opacity-0 bg-white";
  const bar3: string = "origin-bottom-right rotate-45 bg-white";

  return (
    <div
      className="z-30 relative flex flex-col gap-1 pointer lg:hidden"
      onClick={() => props.setMenu(!props.menu)}
    >
      <div
        className={`w-7 h-[0.3rem] rounded-sm duration-300 ${
          props.menu ? bar1 : "bg-black"
        }`}
      />
      <div
        className={`w-7 h-[0.3rem] rounded-sm duration-300 ${
          props.menu ? bar2 : "bg-black"
        }`}
      />
      <div
        className={`w-7 h-[0.3rem] rounded-sm duration-300 ${
          props.menu ? bar3 : "bg-black"
        }`}
      />
    </div>
  );
};

export default Hamburger;
