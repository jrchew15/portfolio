import clsx from "clsx";
import { Container } from "../common/Container";
import type { Color } from "../theme/colors";

const SideBarButton = ({ title, color }: { title: string; color: Color }) => {
  const classNames = clsx({
    ["sidebar-button"]: true,
    ["bg-rosekiss-500"]: color === "rosekiss",
    ["hover:bg-rosekiss-600"]: color === "rosekiss",
    ["bg-mutedteal-500"]: color === "mutedteal",
    ["hover:bg-mutedteal-600"]: color === "mutedteal",
    ["bg-steelblue-500"]: color === "steelblue",
    ["hover:bg-steelblue-600"]: color === "steelblue",
  });

  return <button className={classNames}>{title}</button>;
};

export const SideBarButtons = () => {
  return (
    <Container className="flex max-w-fit flex-col items-start justify-around space-y-2">
      <SideBarButton title="Resume" color="steelblue" />
      <SideBarButton title="About Me" color="rosekiss" />
      <SideBarButton title="Carcassone" color="mutedteal" />
    </Container>
  );
};
