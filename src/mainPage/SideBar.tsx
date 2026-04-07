import clsx from "clsx";
import { Container } from "../common/Container";
import { useState } from "react";
import {
  LucideArrowRightToLine,
  LucideScrollText,
  LucideHouse,
  LucideInfo,
  LucideX,
} from "lucide-react";
import Meeple from "./Meeple";
import { useNavigate } from "react-router";

const SideBarButton = ({
  title,
  expanded,
  onClick,
}: {
  title: string;
  onClick?: () => void;
  expanded?: Boolean;
}) => {
  const buttonClassNames = clsx(
    "sidebar-button",
    "flex",
    "flex-start",
    "items-center",
    "hover:bg-jetblack-450",
    "transition-all",
    "duration-300",
    "ease-in",
    {
      ["w-12"]: !expanded,
      ["w-60"]: expanded,
    },
  );

  const titleClassNames = clsx("sidebar-button-title", {
    "opacity-0": !expanded,
  });

  const iconClassNames = clsx("relative", {
    "ml-1.5": true,
  });

  const Icon = (props: { name: string }) => {
    if (props.name === "Home") {
      return <LucideHouse className={iconClassNames} color="#fafaff" />;
    }
    if (props.name === "About Me") {
      return <LucideInfo className={iconClassNames} color="#fafaff" />;
    }
    if (props.name === "Carcassone") {
      return (
        <div className={iconClassNames}>
          <Meeple />
        </div>
      );
    }
    return <LucideScrollText className={iconClassNames} color="#fafaff" />;
  };

  return (
    <button className={buttonClassNames} onClick={onClick}>
      <div className={iconClassNames}>
        <Icon name={title} />
      </div>
      <span className={titleClassNames}>{title}</span>
    </button>
  );
};

export const SideBarButtons = () => {
  const [expandAllButtons, setExpandAllButtons] = useState(false);
  const navigate = useNavigate();

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
    "content-box",
    "hover:border-r-ghostwhite-500",
    "border-r-jetblack-400",
    "duration-300",
    "h-screen",
    "border-r-2",
    "transition-all",
    "ease-in",
    "mx-0",
    "container",
    {
      ["w-13"]: !expandAllButtons,
      ["w-61"]: expandAllButtons,
    },
  );

  const toggleClasses = clsx("sidebar-toggle", "hover:bg-jetblack-400", {
    ["left-13"]: !expandAllButtons,
    ["left-61"]: expandAllButtons,
  });

  return (
    <>
      <div id="sidebar" className={sidebarClasses} onTransitionEnd={() => {}}>
        <Container className="my-2 flex w-fit flex-col items-start justify-between space-y-2">
          <SideBarButton
            title="Home"
            expanded={expandAllButtons}
            onClick={() => {
              navigate("/");
            }}
          />
          <SideBarButton
            title="Resume"
            expanded={expandAllButtons}
            onClick={() => {
              navigate("/resume");
            }}
          />
          <SideBarButton title="About Me" expanded={expandAllButtons} />
          <SideBarButton title="Carcassone" expanded={expandAllButtons} />
        </Container>
      </div>
      <div
        onClick={() => {
          setExpandAllButtons((x) => !x);
        }}
        className={toggleClasses}
      >
        <LucideX color="#fafaff" className={closeStyle} />
        <LucideArrowRightToLine color="#fafaff" className={openStyle} />
      </div>
    </>
  );
};
