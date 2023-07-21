import Link from "next/link";

import PopUp from "@/components/PopUp";
import NotFound from "@/components/NotFound";
import projects from "@/public/assets/projects.json";

interface projectProps {
  params: { projectName: string };
}

const ProjectPopUp = (props: projectProps) => {
  const index: number = projects.findIndex(
    (el) => el.id == props.params.projectName
  );

  if (index != -1) {
    return <PopUp index={index} route="/projects/" />;
  }

  return <NotFound page="Projects" />;
};

export default ProjectPopUp;
