import { IntroAnimated } from "../intro/intro";
import { ProjectsContainer } from "../projects/projectsContainer";
import { SkillsContainer } from "../skills/skillsContainer";
import { Summary } from "../summary/summary";
import { GeneralContainerDiv } from "./generalContainerStyles";

export const GeneralContainer = () => {
  return (
    <GeneralContainerDiv>
      <IntroAnimated />
      <Summary />
      <SkillsContainer />
      <ProjectsContainer />
    </GeneralContainerDiv>
  );
};
