// Library Imports
import { FC, useState, useEffect } from "react";
//Functions, Helpers, and Utils
import { isAuthenticated } from "../../authentication/authState";
// Interfaces and Types
import { ButtonProps } from "../../constants/interfaces/ButtonProps";
// Components
import { Button } from "../button/Button";
// CSS
import "./cookie-banner.scss";

type CookieBannerProps = {
  bodyText: string;
  button1: ButtonProps;
  button2?: ButtonProps;
};

const CookieBanner: FC<CookieBannerProps> = ({
  bodyText,
  button1,
  button2 = null,
}) => {
  const userAuthenticated = isAuthenticated();
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    if (userAuthenticated) {
      setCookieAccepted(true);
    }
  }, [userAuthenticated]);

  if (cookieAccepted) {
    return null;
  }

  return (
    <div className="cookie-banner padding-left-40 padding-right-40 padding-top-20 padding-bottom-20 full-flex flex-direction-row gap-40">
      <p className="cookie-banner-text">{bodyText}</p>

      <div className="button-wrapper">
        <Button
          text={button1.text}
          variant={button1.variant}
          buttonSize={button1.buttonSize}
          onClickHandler={() => setCookieAccepted(true)}
        />
        {button2 && (
          <Button
            text={button2.text}
            variant={button2.variant}
            buttonSize={button2.buttonSize}
            onClickHandler={button2.onClickHandler}
          />
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
