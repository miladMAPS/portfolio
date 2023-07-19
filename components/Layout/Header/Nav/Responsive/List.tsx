import { Div } from "style-wiz";
import useOnClickOutside from "@hooks/useOnClickOutside";
import useEventListener from "@hooks/useEventListener";
import { useRef } from "react";
import HeaderMenuItem from "../Item";
import { navItems } from "@configs/layout";
import __noop from "lodash-es/noop";
// import { DownloadResume } from "../../DownloadResume";
import type { FC } from "react";

interface HeaderResponsiveMenuListProps {
  rendered: boolean;
  toggleMenu: NoneToVoidFunction;
}

const HeaderResponsiveMenuList: FC<HeaderResponsiveMenuListProps> = (props) => {
  const { rendered, toggleMenu } = props;

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, rendered ? toggleMenu : __noop);

  useEventListener("scroll", toggleMenu);

  return (
    <Div
      position="absolute"
      width="100%"
      ref={ref}
      dimensions={{
        left: 0,
        right: 0,
        top: "var(--layout-header-height)",
      }}
      bg="bg-primary-main"
      zIndex="2"
      py="2"
      px="4"
      opacity={rendered ? 1 : 0}
      pace="fast"
      flex={[, , "column"]}
      gap="3"
    >
      {navItems.map((menu, i) => (
        <HeaderMenuItem key={i} onClick={toggleMenu} {...menu} />
      ))}
      {/* <DownloadResume /> */}
    </Div>
  );
};

export default HeaderResponsiveMenuList;
