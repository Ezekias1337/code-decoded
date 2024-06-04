// Library Imports
import { ReactNode } from "react";
// Functions, Helpers, Utils, and Hooks
import generateSharedInputProps from "./generateSharedInputProps";
import isDropdownField from "./isDropdownField";
// Interfaces and Types
import { Field } from "../constants/formTypes";
import { FormState, SetStateHookForm } from "../constants/formProps";
// Components
import { CreditCardInput } from "../components/input-fields/CreditCardInput";
import { DateInput } from "../components/input-fields/DateInput";
import { DropdownInput } from "../components/input-fields/DropdownInput";
import { EmailInput } from "../components/input-fields/EmailInput";
import { PasswordInput } from "../components/input-fields/PasswordInput";
import { PhoneNumberInput } from "../components/input-fields/PhoneNumberInput";
/* import { QuantityStepper } from "../../input-fields/QuantityStepper";
import { SwitchInput } from "../../input-fields/SwitchInput"; */
import { TextAreaInput } from "../components/input-fields/TextAreaInput";
import { TextInput } from "../components/input-fields/TextInput";
//import { Button } from "../../button/Button";
import { FormError } from "../components/FormError";

export const renderInputFields = (
  inputFields: Field[],
  formErrors: FormState,
  setStateHook: SetStateHookForm,
  setErrorHook: SetStateHookForm
): ReactNode[] => {
  const arrayOfInputFields: ReactNode[] = [];

  for (const inputField of inputFields) {
    let inputFieldToBePushed: ReactNode;

    const generalInputProps = generateSharedInputProps(
      inputField,
      formErrors,
      setStateHook,
      setErrorHook
    );

    switch (inputField.type) {
      case "creditCard":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`column-${inputField.columns}-field`}
          >
            <CreditCardInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "date":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`column-${inputField.columns}-field`}
          >
            <DateInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;

      case "dropdown":
        if (isDropdownField(inputField)) {
          inputFieldToBePushed = (
            <div
              key={inputField.name}
              className={`column-${inputField.columns}-field`}
            >
              <DropdownInput
                {...generalInputProps}
                dropdownOptions={inputField.dropdownOptions}
              />
              <FormError formErrors={formErrors} inputField={inputField} />
            </div>
          );
        }

        break;
      case "email":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`column-${inputField.columns}-field`}
          >
            <EmailInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "password":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`column-${inputField.columns}-field`}
          >
            <PasswordInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "phoneNumber":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`column-${inputField.columns}-field`}
          >
            <PhoneNumberInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      /* case "quantity":
              already has pattern for regex inside component  
              break;
              case "switch": */

      case "text":
        inputFieldToBePushed = (
          <div
            key={inputField.name}
            className={`column-${inputField.columns}-field`}
          >
            <TextInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "textArea":
        inputFieldToBePushed = (
          <div key={inputField.name} className="text-area-wrapper">
            <TextAreaInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      default:
        console.log(
          `inputField.type of: ${inputField.type} does not match any of the options in the switch statement, returning warning in DOM`
        );
        inputFieldToBePushed = (
          <div>
            "{inputField.type}" does not match any input type available, check
            your spelling. 🗿
          </div>
        );
    }

    arrayOfInputFields.push(inputFieldToBePushed);
  }

  return arrayOfInputFields;
};
