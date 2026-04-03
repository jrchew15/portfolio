import clsx from "clsx";
import { Container } from "../common/Container";
import { useState } from "react";
import {
  LucideArrowLeftToLine,
  LucideArrowRightToLine,
  LucideScrollText,
} from "lucide-react";

const SideBarButton = ({
  title,
  expanded,
  groupHovered,
}: {
  title: string;
  expanded?: Boolean;
  groupHovered?: Boolean;
}) => {
  const buttonClassNames = clsx(
    "sidebar-button",
    "flex",
    "items-center",
    " hover:bg-jetblack-450",
    {
      ["w-12"]: !expanded,
      ["w-60"]: expanded,
    },
  );

  const titleClassNames = clsx(
    "sidebar-button-content",
    "w-60",
    "text-center",
    {
      "opacity-0": !expanded && !groupHovered,
      "delay-200": groupHovered,
    },
  );

  const iconClassNames = clsx("sidebar-button-content", "relative", {
    "w-0": expanded || groupHovered,
    "w-[24px]": !expanded && !groupHovered,
    "opacity-0": expanded || groupHovered,
    "ml-1.5": true,
  });

  const buttonContent = (
    <>
      <div className={iconClassNames}>
        <LucideScrollText className={iconClassNames} color="#fafaff" />
      </div>
      <span className={titleClassNames}>{title}</span>
    </>
  );

  return <button className={buttonClassNames}>{buttonContent}</button>;
};

export const SideBarButtons = () => {
  const [expandAllButtons, setExpandAllButtons] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const closeStyle = clsx("absolute", "transition-opacity", "duration-300", {
    "opacity-0": !expandAllButtons,
    "delay-200": expandAllButtons,
    "z-1": expandAllButtons,
  });
  const openStyle = clsx("absolute", "transition-opacity", "duration-300", {
    "opacity-0": expandAllButtons,
    "delay-200": !expandAllButtons,
    "z-1": !expandAllButtons,
  });

  const sidebarClasses = clsx(
    "group",
    "hover:border-r-ghostwhite-500",
    "border-r-jetblack-400",
    "duration:2500",
    "h-dvh",
    "border-r-2",
    "py-2",
    "transition-all",
    "ease-in",
    {
      ["w-12"]: !isHovered && !expandAllButtons,
      ["w-60"]: isHovered || expandAllButtons,
      ["delay-300"]: !isHovered,
    },
  );

  return (
    <>
      <Container
        id="sidebar"
        className={sidebarClasses}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <Container className="flex w-fit flex-col items-start justify-between space-y-2">
          <SideBarButton
            title="Resume"
            expanded={expandAllButtons}
            groupHovered={isHovered}
          />
          <SideBarButton
            title="About Me"
            expanded={expandAllButtons}
            groupHovered={isHovered}
          />
          <SideBarButton
            title="Carcassone"
            expanded={expandAllButtons}
            groupHovered={isHovered}
          />
        </Container>
      </Container>
      <div className="group-hover:bg-jetblack-450 hover:bg-jetblack-400 transition-bg ml-2 flex max-h-11 min-h-11 max-w-11 min-w-11 cursor-pointer items-center justify-center rounded-full p-0 duration-200">
        <LucideArrowLeftToLine
          color="#fafaff"
          className={closeStyle}
          onClick={() => {
            setExpandAllButtons(false);
          }}
        />
        <LucideArrowRightToLine
          color="#fafaff"
          className={openStyle}
          onClick={() => {
            setExpandAllButtons(true);
          }}
        />
      </div>
    </>
  );
};
