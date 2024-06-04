// Library Imports
import { FC } from "react";
// CSS
import "./disclaimer.scss";

type DisclaimerProps = {
  bodyText?: string;
};

export const Disclaimer: FC<DisclaimerProps> = ({ bodyText }) => {
  return (
    <div className="disclaimer padding-left-and-right">
      <p>
        {bodyText}
      </p>
    </div>
  );
};
