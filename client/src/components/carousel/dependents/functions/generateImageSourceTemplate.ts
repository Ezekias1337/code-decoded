// Interfaces and Types
import { PhoneNumberCountryCode } from "../constants/formProps";

const getImgUrl = (fileName: string, fileExtension: string = "svg"): string => {
  // Construct the relative path from the root directory
  const relativePath = `/assets/images/icons/country-flags/${fileName}.${fileExtension}`;
  // Construct the full URL based on the root of your project
  const imgUrl = new URL(relativePath, window.location.origin).href;
  return imgUrl;
};

export const generateImageSourceTemplate = (
  phoneCodeObject: PhoneNumberCountryCode
): string => {
  return getImgUrl(
    `${phoneCodeObject.abbreviation} - ${phoneCodeObject.country}`
  );
};
