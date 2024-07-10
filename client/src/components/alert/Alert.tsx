// Library Imports
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces and Types
import { IconProp } from "@fortawesome/fontawesome-svg-core";
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
  icon?: IconProp;
};

export const Alert: FC<AlertProps> = ({
  variant = "primary",
  bodyText,
  additionalClassNames = "",
  icon,
}) => {
  return (
    <div
      className={`alert-wrapper padding-left-and-right ${additionalClassNames}`}
    >
      <aside className={`alert ${variant}-alert`} role="alert">
        {icon && <FontAwesomeIcon icon={icon} size="xl" />}
        <span className="padding-left-20">{bodyText}</span>
      </aside>
    </div>
  );
};
