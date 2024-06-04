// Library Imports
import { FC, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/formProps";
import { textAndNumbersAndSpecialCharsNoSpacesPattern } from "../../../../../../../shared/constants/regexPatterns";
// Constants
import { currentPasswordAutocomplete } from "../../constants/formAutocompleteStrings";
// Components
import { TextInput } from "./TextInput";

/* 
  TODO: Need to ensure that this regex pattern allows for symbols like !@#$
  
  
  BUG: Not re-rendering
    solutions: 1.) Move state of visibility to Form, pass it as prop to force-re-render
*/

export const PasswordInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames,
  placeholder = "Password",
  columns = "6",
  defaultValue = "",
  autoComplete = currentPasswordAutocomplete,
  setStateHook,
  setErrorHook,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <>
      <TextInput
        name={name}
        label={label}
        additionalClassNames={`password-input ${
          isPasswordHidden === true
            ? "password-input-obscured"
            : "password-input-revealed"
        } ${additionalClassNames}`}
        placeholder={placeholder}
        columns={columns}
        defaultValue={defaultValue}
        required={true}
        inputType={isPasswordHidden === true ? "password" : "text"}
        inputMode="text"
        autoComplete={autoComplete}
        pattern={textAndNumbersAndSpecialCharsNoSpacesPattern}
        maxLength={30}
        icon={isPasswordHidden === true ? faEye : faEyeSlash}
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
        childrenToRender={[
          <button
            key="toggle-password-visibility-button"
            className="toggle-password-visibility-button"
            name="toggle-password-visibility-button"
            role="button"
            type="button"
            onClick={() => togglePasswordVisibility()}
          ></button>,
        ]}
      />
    </>
  );
};
