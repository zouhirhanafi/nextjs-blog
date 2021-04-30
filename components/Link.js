import React from "react";
import NLink from "next/link";

export function Link({ href, children, as: Component = "a" }) {
  return (
    <NLink href={href}>
      <Component>{children}</Component>
    </NLink>
  );
}
