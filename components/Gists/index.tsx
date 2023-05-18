import Div from "@kits/Div";
import GistCard from "./Card";
import SectionTitle from "@components/Layout/Title/Section";
import type { FC } from "react";

interface GistsProps {
  title?: string;
  items: Array<IGist>;
}

const Gists: FC<GistsProps> = (props) => {
  const {
    title,
    items,
    // loading,
    // loadingCount = 8,
    // orientation = Orientations.VERTICAL,
    ...rest
  } = props;

  return (
    <Div my="3" {...rest}>
      <SectionTitle title={title} />
      <Div
        grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
        css={{ gridAutoFlow: "row" }}
        responsive={{
          sm: { css: { gridTemplateColumns: "repeat(2, 1fr)" } },
          lg: { css: { gridTemplateColumns: "repeat(3, 1fr)" } },
        }}
      >
        {items.map((post, i) => (
          <GistCard key={i} {...post} />
        ))}
      </Div>
    </Div>
  );
};

export default Gists;
