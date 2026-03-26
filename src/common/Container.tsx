import type { ComponentProps } from "react";

export const Container = (
  props: ComponentProps<"div"> & { classes?: string | string[] },
) => {
  const { children, className, classes, ...passedProps } = props;
  const classNames = parseClasses(className || classes);

  return (
    <div className={classNames} {...passedProps}>
      {children}
    </div>
  );
};

function parseClasses(classes?: string | string[]): string {
  if (!classes) {
    return "container mx-auto";
  }

  return (
    "container mx-auto " +
    (typeof classes === "string" ? classes : classes.join(" "))
  );
}
