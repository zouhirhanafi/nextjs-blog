import React, { Children } from "react";
import NHead from "next/head";

export const Head = ({ title, children, ...props }) => {
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
