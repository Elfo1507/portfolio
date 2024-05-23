import { DrawerContent } from "./drawer";
import { DrawerBottomStyles, DrawerItem } from "./drawerStyles";

interface GenericDrawerBottomProps {
  content: DrawerContent;
  pos: string;
}

export const GenericDrawerBottom = (props: GenericDrawerBottomProps) => {
  const content: DrawerContent = props.content;
  const pos = props.pos;

  return (
    <DrawerBottomStyles pos={pos}>
      <div id="title">
        <h3>{content.mainTitle}</h3>
      </div>
      <div>
        {content.titles.map((item) => {
          return (
            <DrawerItem key={item}>
              <p>{item}</p>
            </DrawerItem>
          );
        })}
      </div>
    </DrawerBottomStyles>
  );
};
