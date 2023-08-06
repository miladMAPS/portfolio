import { Div } from "style-wiz";
import BlogCards from "@components/Cards/Blog";
import { useTranslation } from "next-i18next";
import type { FC } from "react";

const homeBlogs = [
  "one-on-one",
  "front-end-learning-roadmap",
  "adr",
  "data-fetching-pattern-preference",
  "rethink-using-redux",
  "build-time-data-caching-in-next-js",
  // "redux-clean-code",
  // "homophobia",
];

interface FeaturedPostsProps {
  posts: IBlog[];
}

const FeaturedPosts: FC<FeaturedPostsProps> = (props) => {
  const { posts } = props;

  const [t] = useTranslation("home");

  // const isMediumScreen = useMediaQuery({ minWidth: breakpoints.sm, maxWidth: breakpoints.md });

  // const items = posts.filter(({ slug }) => homeBlogs.includes(slug));
  const items = homeBlogs.map((slug) =>
    posts.find((post) => post.slug === slug)
  ) as IBlog[];

  return (
    <Div my="4">
      <BlogCards items={items} title={t("posts.title")} moreLink="/blog" />
    </Div>
  );
};

export default FeaturedPosts;
