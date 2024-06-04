// Functions, Helpers, Utils, and Hooks
import { findCountryCodeIndex } from "./findCountryCodeIndex";
import { generateImageSourceTemplate } from "./generateImageSourceTemplate";
// Constants
import { phoneNumberCountryCodes } from "../constants/phoneNumberCountryCodes";
// Interfaces and Types
import { SetStateHookString } from "../constants/formProps";

export const updateCountryCodeImage = (
  countryName: string,
  setCountryImage: SetStateHookString
) => {
  const indexOfDesiredCountry = findCountryCodeIndex(
    countryName,
    phoneNumberCountryCodes
  );
  const desiredCountryObject = phoneNumberCountryCodes[indexOfDesiredCountry];
  const desiredCountryImageSource =
    generateImageSourceTemplate(desiredCountryObject);
  setCountryImage(desiredCountryImageSource);
};
