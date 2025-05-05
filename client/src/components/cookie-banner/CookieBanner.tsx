// Library Imports
import { useState, useEffect } from "react";
// Hooks
import useGlobalPrivacyControl from "../../hooks/useGlobalPrivacyControl";
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

const COOKIE_NAME = "cookieAccepted";

const CookieBanner: React.FC<CookieBannerProps> = ({
  bodyText,
  button1,
  button2 = null,
}) => {
  const hasGlobalPrivacyControl = useGlobalPrivacyControl();
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    const hasAccepted = document.cookie.includes(`${COOKIE_NAME}=true`);
    if (hasAccepted) {
      setCookieAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = `${COOKIE_NAME}=true; path=/; SameSite=Lax; max-age=${60 * 60 * 24 * 365}`; // 1 year
    setCookieAccepted(true);
    window.dispatchEvent(new Event("cookie-consent-granted"));
  };

  if (cookieAccepted || hasGlobalPrivacyControl) {
    return <></>;
  }

  return (
    <div className="cookie-banner padding-left-40 padding-right-40 padding-top-20 padding-bottom-20 full-flex flex-direction-row gap-40">
      <p className="cookie-banner-text">{bodyText}</p>

      <div className="button-wrapper">
        <Button
          text={button1.text}
          variant={button1.variant}
          buttonSize={button1.buttonSize}
          onClickHandler={handleAccept}
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