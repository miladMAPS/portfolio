import Div from "@kits/Div";
import Text from "@kits/Text";
import Icon from "@kits/Icon";
import { If, Then } from "@kits/ConditionalRendering";
import type { FC } from "react";
import type TextProps from "@kits/Text/props";
import type { SectionTitleProps } from "./props";

const SectionTitle: FC<SectionTitleProps> = (props) => {
  const { icon, title, ns, tag = "h3" } = props;

  if (!title) return null;

  let size: TextProps["size"];
  switch (tag) {
    case "h3":
      size = "h-sm";
      break;
    case "h4":
      size = "lg";
      break;
    default:
      break;
  }

  return (
    <Div flex={["center", "start"]} mb="2" gap="2">
      <If condition={icon}>
        <Then>
          <Div flex={["center", "center"]}>
            <Icon name={icon!} size="h-lg" />
          </Div>
        </Then>
      </If>
      <Div>
        <Text ns={ns} size={size} bold as={tag}>
          {title}
        </Text>
      </Div>
    </Div>
  );
};

export default SectionTitle;
