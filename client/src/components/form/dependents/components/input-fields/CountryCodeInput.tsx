// Library Imports
import { FC, useState, useEffect, useMemo } from "react";
// Functions, Helpers, and Utils
import { renderCountryCodeOptions } from "../../functions/renderCountryCodeOptions";
import { updateCountryCodeImage } from "../../functions/updateCountryCodeImage";
// Constants
import { phoneNumberCountryCodes } from "../../constants/phoneNumberCountryCodes";
// Interfaces and Types
import {
  CountryCodeInputFieldProps,
  CountryCodeFilterProps,
} from "../../constants/formProps";
import { FormState } from "../../constants/formProps";
// Components
import { SearchInput } from "./SearchInput";

export const CountryCodeInput: FC<CountryCodeInputFieldProps> = ({
  showMenu,
  setShowMenu,
  countryImage,
  setCountryImage,
  setCountryCode,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<
    CountryCodeFilterProps[]
  >(phoneNumberCountryCodes);
  const [countryCodeSearchParams, setCountryCodeSearchParams] =
    useState<FormState>({ countryCodeSearchBar: "" });
  const [, setCountryCodeSearchErrors] =
    useState<FormState>({});

  const arrayOfNumChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const arrayOfOptions = useMemo(
    () =>
      renderCountryCodeOptions(
        filteredOptions,
        setCountryCode,
        setShowMenu,
        setCountryImage
      ),
    [filteredOptions, setCountryCode, setCountryImage, setShowMenu]
  );

  /* 
    Make Flag Icon default to USA
  */

  useEffect(() => {
    updateCountryCodeImage("United States", setCountryImage);
  }, []);

  /* 
    When user types in the search box update filteredOptions
  */

  useEffect(() => {
    const userInput = countryCodeSearchParams.countryCodeSearchBar;
    let filterResult: CountryCodeFilterProps[] = [];

    /* 
      Determine if user is searching by country code or by country name
    */

    if (
      typeof userInput === "string" &&
      arrayOfNumChars.includes(userInput[0])
    ) {
      filterResult = phoneNumberCountryCodes.filter((option) =>
        option.code.includes(userInput)
      );
    } else if (typeof userInput === "string") {
      filterResult = phoneNumberCountryCodes.filter((option) =>
        option.country.toLowerCase().includes(userInput.toLowerCase())
      );
    }

    setFilteredOptions(filterResult);
  }, [countryCodeSearchParams.countryCodeSearchBar]);

  /* 
    Reset the filter to default after the user selects an option
  */

  useEffect(() => {
    setFilteredOptions(phoneNumberCountryCodes);
  }, [showMenu]);

  return (
    <div className={`country-code-input-wrapper z-index-2`}>
      {showMenu && (
        <div
          className="darken-background-overlay"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
      <button
        className="toggle-country-code-menu"
        style={{ backgroundImage: `url(${countryImage})` }}
        id="toggle-country-code-menu"
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(!showMenu);
        }}
      ></button>
      <SearchInput
        name="Country Code Search Bar"
        additionalClassNames={`country-code-search-bar show-search-bar-${showMenu}`}
        label="Search Country Code"
        required={false}
        setStateHook={setCountryCodeSearchParams}
        setErrorHook={setCountryCodeSearchErrors}
        columns="12"
      />
      <ul
        className={`country-code-menu-wrapper show-country-code-menu-${showMenu} ${arrayOfOptions.length === 0 ? "no-results padding-top-20 padding-bottom-20" : ""} z-index-3`}
      >
        {arrayOfOptions?.length > 0 ? (
          arrayOfOptions
        ) : (
          <span className="padding-left-20">No Results Found</span>
        )}
      </ul>
    </div>
  );
};
