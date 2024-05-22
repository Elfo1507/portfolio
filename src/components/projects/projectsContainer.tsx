import { DrawerItem, DrawerSideStyles } from "../drawer/drawerStyles";
import { projects } from "./projects";

export const ProjectsContainer = () => {
  const content = projects;

    return (
        <DrawerSideStyles>
          <h3>{content.mainTitle}</h3>
          <div>
            {content.items.map((item) => {
              return (
                <DrawerItem key={item.title}>
                  <a href={item.link} target="_blank">{item.title}</a>
                </DrawerItem>
              );
            })}
          </div>
        </DrawerSideStyles>
      );
}