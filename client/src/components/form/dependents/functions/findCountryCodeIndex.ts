// Interfaces and Types
import { PhoneNumberCountryCode } from "../constants/formProps";

export const findCountryCodeIndex = (
  country: string,
  phoneNumberCountryCodes: PhoneNumberCountryCode[]
): number => {
  const desiredIndex = phoneNumberCountryCodes.findIndex(
    (obj) => obj.country === country
  );
  return desiredIndex;
};
