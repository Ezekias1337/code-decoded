// Library Imports
import { FC } from "react";
import { Link } from "@tanstack/react-router";
// CSS
import "./general-link.scss";

type LinkProps = {
  text: string;
  url: string;
  openInNewTab: boolean;
  additionalClassNames?: string;
  variant?: string;
};

export const GeneralLink: FC<LinkProps> = ({
  text,
  url,
  openInNewTab,
  additionalClassNames,
  variant = "primary",
}) => {
  return (
    <Link
      to={url}
      className={`general-link ${variant}-link ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      }`}
      target={openInNewTab ? "_blank" : ""}
    >
      {text}
    </Link>
  );
};
