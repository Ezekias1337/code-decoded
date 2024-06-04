// Library Imports
import { FC } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/formProps";
import { textAndNumbersPattern } from "../../../../../../../shared/constants/regexPatterns";
// Components
import { TextInput } from "./TextInput";

export const SearchInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames,
  placeholder = "Search...",
  columns = "6",
  defaultValue = "",
  required = false,
  inputType = "text",
  inputMode = "search",
  pattern = textAndNumbersPattern,
  maxLength = 30,
  setStateHook,
  setErrorHook,
}) => {
  return (
    <TextInput
      name={name}
      label={label}
      additionalClassNames={`search-input ${additionalClassNames}`}
      placeholder={placeholder}
      columns={columns}
      defaultValue={defaultValue}
      required={required}
      inputType={inputType}
      inputMode={inputMode}
      pattern={pattern}
      maxLength={maxLength}
      icon={faMagnifyingGlass}
      setStateHook={setStateHook}
      setErrorHook={setErrorHook}
    />
  );
};
