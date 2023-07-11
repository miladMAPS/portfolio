import Div from "@kits/Div";
import Chip, { type ChipProps } from "./Item";
import type { FC } from "react";

type ChipsProps = { items: Array<ChipProps> };

const Chips: FC<ChipsProps> = (props) => {
  const { items } = props;

  return (
    <Div flex={["center", "start", , "wrap"]} gap="2">
      {items.map((item, i) => (
        <Chip key={i} {...item} />
      ))}
    </Div>
  );
};

export default Chips;
