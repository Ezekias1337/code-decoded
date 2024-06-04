// Library Imports
import { FC } from "react";
// Interfaces and Types

// CSS
import "./alert.scss";

type AlertProps = {
  variant?:
    | "primary"
    | "primary-dark"
    | "warning"
    | "info"
    | "neutral"
    | "neutral-dark"
    | "success"
    | "error";
  bodyText: string;
  additionalClassNames?: string;
};

export const Alert: FC<AlertProps> = ({
  variant = "primary",
  bodyText,
  additionalClassNames = "",
}) => {
  return (
    <div
      className={`alert-wrapper padding-left-and-right ${additionalClassNames}`}
    >
      <aside className={`alert ${variant}-alert`} role="alert">
        <span>{bodyText}</span>
      </aside>
    </div>
  );
};
