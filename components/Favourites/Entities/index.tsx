import { useMemo } from "react";
import Div from "@kits/Div";
import PageTitle from "@components/Layout/Title/Page";
import SectionTitle from "@components/Layout/Title/Section";
import FavouriteEntity from "./Entity";
import FavouritesHelper from "@helpers/favourites";
import { responsiveUpperBoundBreakpoint } from "@configs/general";
import type { FC } from "react";
import type { IconName } from "@kits/Icon/props";

const FavouriteEntities: FC = () => {
  const favouritesLinks = useMemo(FavouritesHelper.getLinks, []);

  return (
    <Div>
      <PageTitle title="favourites.title" />
      {favouritesLinks.map(({ links, group }, i) => (
        <Div key={i} flex={["start", "start", "column"]} mb="3">
          <SectionTitle
            icon={group as IconName}
            title={`favourites.group.${group}`}
            tag="h3"
          />
          <Div
            display="flex"
            css={{ columnGap: "var(--spacing-3)", flexDirection: "column" }}
            responsive={{
              sm: { css: { flexDirection: "row" } },
              [responsiveUpperBoundBreakpoint]: {
                css: { columnGap: "var(--spacing-4)" },
              },
            }}
            width="100%"
            overflowX="auto"
            thinScrollbar
          >
            {links.map((item, j) => (
              <FavouriteEntity {...item} key={j} />
            ))}
          </Div>
        </Div>
      ))}
    </Div>
  );
};

export default FavouriteEntities;
