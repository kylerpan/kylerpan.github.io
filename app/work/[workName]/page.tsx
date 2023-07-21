import PopUp from "@/components/PopUp";
import NotFound from "@/components/NotFound";
import work from "@/public/assets/work.json";

interface workProps {
  params: { workName: string };
}

const WorkPopUp = (props: workProps) => {
  const index: number = work.findIndex((el) => el.id == props.params.workName);

  if (index != -1) {
    return <PopUp index={index} route="/work/" />;
  }

  return <NotFound page="Work" />;
};

export default WorkPopUp;
