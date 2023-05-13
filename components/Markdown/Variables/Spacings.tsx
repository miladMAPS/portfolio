import Div from "@kits/Div";
import Tree from "@kits/Tree";
import SectionTitle from "@components/Layout/Title/SectionTitle";
import spacings from "@stylesheets/constants/spacings.json";

const SpacingVariables = (props) => {
  return (
    <Div id="spacings" my="3">
      <SectionTitle title="markdown.variables.spacings" tag="h4" />
      <Tree
        branches={Object.keys(spacings).filter((a) => !a.includes("".imp()))}
        defaultOpen={false}
      />
    </Div>
  );
};

export default SpacingVariables;
