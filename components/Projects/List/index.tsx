import Div from "@kits/Div";
import projectsData from "@data/projects";
import PageTitle from "@components/Layout/Title/Page";
import ProjectCard from "./Card";
import ProjectsMoreLink from "./MoreLink";
import type { FC } from "react";

const ProjectsList: FC = () => {
  const items = [
    projectsData[0],
    projectsData[1],
    projectsData[4],
    projectsData[2],
    projectsData[3],
    projectsData[5],
  ];

  // last n items to hide in responsive
  const itemsToHide = 3;

  return (
    <Div my="3">
      <PageTitle title="projects.title" tag="h2" />
      {items?.length ? (
        <Div
          grid={["repeat(1, 1fr)", , "1rem", "1rem"]}
          overflowX="auto"
          css={{
            gridAutoFlow: "row",
            [`& > *:nth-child(n+${6 - itemsToHide + 1})`]: { display: "none" },
          }}
          responsive={{
            md: {
              css: {
                gridTemplateColumns: "repeat(3, 1fr)",
                [`& > *:nth-child(n+${6 - itemsToHide + 1})`]: {
                  display: "flex",
                },
              },
            },
          }}
          pb="2"
        >
          {items.map((data, i) => (
            <ProjectCard key={i} {...data} />
          ))}
        </Div>
      ) : null}
      <ProjectsMoreLink />
    </Div>
  );
};

export default ProjectsList;
