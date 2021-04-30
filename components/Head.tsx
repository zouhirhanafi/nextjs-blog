import React, { Children } from "react";
import NHead from "next/head";

export const Head = ({ title, children, ...props }: {
  children?: React.ReactNode
  title?: string
}) => {
  return (
    <NHead {...props}>
      {children}
      {title && <title>{title}</title>}
    </NHead>
  );
};

// KO
// export const HeadTitle = ({ children }) => {
//   return <title>{children}</title>;
// };
