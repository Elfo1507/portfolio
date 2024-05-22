import { GenericDrawerBottom } from "../drawer/drawerBottom";
import { hardSkills, softSkills } from "./skills";
import { SkillsContainerDiv } from "./skillsContainerSyles";

export const SkillsContainer = () => {
  return (
    <SkillsContainerDiv>
      <GenericDrawerBottom pos="right" content={hardSkills} />
      <GenericDrawerBottom pos="left" content={softSkills} />
    </SkillsContainerDiv>
  );
};
