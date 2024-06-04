// Library Imports
import { FC } from "react";
import { faAt } from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/formProps";
import { emailPattern } from "../../../../../../../shared/constants/regexPatterns";
import { emailAutocomplete } from "../../constants/formAutocompleteStrings";
// Components
import { TextInput } from "./TextInput";

export const EmailInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames,
  placeholder = "user@gmail.com",
  columns = "6",
  defaultValue = "",
  required,
  setStateHook,
  setErrorHook,
}) => {
  return (
    <TextInput
      name={name}
      label={label}
      additionalClassNames={`date-input ${additionalClassNames}`}
      placeholder={placeholder}
      columns={columns}
      defaultValue={defaultValue}
      required={required}
      inputType="email"
      inputMode="email"
      autoComplete={emailAutocomplete}
      pattern={emailPattern}
      maxLength={50}
      icon={faAt}
      setStateHook={setStateHook}
      setErrorHook={setErrorHook}
    />
  );
};
