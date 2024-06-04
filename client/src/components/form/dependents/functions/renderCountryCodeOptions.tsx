// Library Imports
import { ReactNode } from "react";
// Functions, Helpers, Utils, and Hooks
import { generateImageSourceTemplate } from "./generateImageSourceTemplate";
import { updateCountryCodeImage } from "./updateCountryCodeImage";
// Interfaces and Types
import {
  PhoneNumberCountryCode,
  SetStateHookString,
  SetStateHookBoolean,
} from "../constants/formProps";

const handleSelectCountry = (
  code: PhoneNumberCountryCode,
  setCountryCode: SetStateHookString,
  setShowMenu: SetStateHookBoolean,
  setCountryImage: SetStateHookString
) => {
  setCountryCode(code.code);
  setShowMenu(false);
  updateCountryCodeImage(code.country, setCountryImage);
};

export const renderCountryCodeOptions = (
  countryCodes: PhoneNumberCountryCode[],
  setCountryCode: SetStateHookString,
  setShowMenu: SetStateHookBoolean,
  setCountryImage: SetStateHookString
): ReactNode[] => {
  const arrayOfCountryCodeOptions: ReactNode[] = [];

  for (const [index, code] of countryCodes.entries()) {
    const flagImageSource = generateImageSourceTemplate(code);
    const elementToPush = (
      <li
        key={index}
        id={`${code.country}-option`}
        aria-label={`${code.country}-option`}
        className="country-code-option py-2"
        onClick={() =>
          handleSelectCountry(
            code,
            setCountryCode,
            setShowMenu,
            setCountryImage
          )
        }
      >
        <img src={flagImageSource} className="country-code-icon ms-4" />
        <span className="country-code-label mx-4">{`${code.country} ${code.code}`}</span>
      </li>
    );

    arrayOfCountryCodeOptions.push(elementToPush);
  }

  return arrayOfCountryCodeOptions;
};
