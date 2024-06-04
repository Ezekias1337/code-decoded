// Library Imports
import { FC, useEffect, useState } from "react";
import {
  faCcAmex,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
// Functions, Helpers and Utils
import { handleFormChange } from "../../functions/handleFormChange";
// Constants
import { creditCardNumberPattern } from "../../../../../../../shared/constants/regexPatterns";
import { creditCardNumberAutocomplete } from "../../constants/formAutocompleteStrings";
// Interfaces and Types
import { FormUpdateEvent } from "../../constants/formTypes";
import { CreditCardFieldProps } from "../../constants/formProps";

// Components
import { TextInput } from "./TextInput";

export const CreditCardInput: FC<CreditCardFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  columns = "6",
  defaultValue = "",
  required,
  inputType = "tel",
  inputMode = "numeric",
  setStateHook,
  setErrorHook,
}) => {
  /* 
      TODO: Listen for autocomplete or copy paste for formatting
    */

  /* 
    There is strange behavior in html input fields regarding trailing whitespace, This function
    is used so that I can apply proper formatting to the input for ease of use
  */
  const isTrailingSpacePresent = (inputFieldValue: string): boolean => {
    const strLength = inputFieldValue.length;
    const lastChar = inputFieldValue[strLength - 1];

    if (lastChar === " ") {
      return true;
    } else {
      return false;
    }
  };

  const addGapWhenNeeded = (
    inputFieldValue: string,
    inputLength: number
  ): string => {
    const trailingSpacePresent = isTrailingSpacePresent(inputFieldValue);
    let stringtoReturn = "";

    if (
      inputLength === 4 ||
      inputLength === 9 ||
      (inputLength === 14 && trailingSpacePresent === false)
    ) {
      stringtoReturn = inputFieldValue += " ";
    } else {
      stringtoReturn = inputFieldValue;
    }

    return stringtoReturn;
  };

  const handleInputChange = (e: FormUpdateEvent) => {
    const formattedE = e;
    let creditCardNumInput = formattedE.target.value;
    const creditCardNumberInputLength = creditCardNumInput.length;
    const doesInputHaveTrailingSpace = isTrailingSpacePresent(creditCardNumber);

    if (
      creditCardNumberInputLength < previousInputLength &&
      doesInputHaveTrailingSpace
    ) {
      e.target.value = creditCardNumInput.slice(0, -1);
    } else {
      e.target.value = addGapWhenNeeded(
        creditCardNumInput,
        creditCardNumberInputLength
      );
      creditCardNumInput = e.target.value;
    }

    setCreditCardNumber(creditCardNumInput);
    setPreviousInputLength(creditCardNumberInputLength); // Update previous length
    handleFormChange(e, setStateHook, setErrorHook);
  };

  /* 
    Select the credit card icon to use based on the first digit entered
  */

  const [selectedIcon, setSelectedIcon] = useState(faCreditCard);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardFirstDigit, setCreditCardFirstDigit] = useState(
    creditCardNumber[0]
  );
  const [previousInputLength, setPreviousInputLength] = useState(
    creditCardNumber.length
  );

  useEffect(() => {
    setCreditCardFirstDigit(creditCardNumber[0]);
    setPreviousInputLength(creditCardNumber.length);
  }, [creditCardNumber]);

  useEffect(() => {
    if (creditCardFirstDigit === "3") {
      setSelectedIcon(faCcAmex);
    } else if (creditCardFirstDigit === "4") {
      setSelectedIcon(faCcVisa);
    } else if (creditCardFirstDigit === "5") {
      setSelectedIcon(faCcMastercard);
    } else if (creditCardFirstDigit === "6") {
      setSelectedIcon(faCcDiscover);
    } else {
      setSelectedIcon(faCreditCard);
    }
  }, [creditCardFirstDigit]);

  return (
    <TextInput
      name={name}
      label={label}
      additionalClassNames={`credit-card-input ${additionalClassNames}`}
      placeholder="•••• •••• •••• ••••"
      columns={columns}
      defaultValue={defaultValue}
      required={required}
      inputType={inputType}
      inputMode={inputMode}
      pattern={creditCardNumberPattern}
      autoComplete={creditCardNumberAutocomplete}
      maxLength={19}
      icon={selectedIcon}
      setStateHook={setStateHook}
      setErrorHook={setErrorHook}
      handleInputChange={handleInputChange}
    />
  );
};
