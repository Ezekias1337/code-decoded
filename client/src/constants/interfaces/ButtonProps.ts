// Library Imports
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ButtonProps {
  text?: string;
  variant:
    | "primary"
    | "primary-dark"
    | "warning"
    | "info"
    | "neutral"
    | "neutral-dark"
    | "success"
    | "error";
  icon?: IconProp;
  leftIcon?: boolean;
  rightIcon?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClickHandler?: Function;
  type?: "button" | "submit" | "reset";
  url?: string;
  buttonId?: string | undefined;
  additionalClassNames?: string | undefined;
  buttonSize?: "small" | "medium" | "large";
}
