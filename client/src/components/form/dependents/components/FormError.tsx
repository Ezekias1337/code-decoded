// Library Imports
import { FC } from "react";
// Functions, Helpers, and Utils
import { camelCasifyString } from "../../../../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { FormState } from "../constants/formProps";
import { Field } from "../constants/formTypes";

interface FormErrorProps {
  formErrors: FormState;
  inputField: Field;
}

export const FormError: FC<FormErrorProps> = ({ formErrors, inputField }) => {
  if (!formErrors[camelCasifyString(inputField.name)]) {
    return <></>;
  } else {
    return (
      <div className="form-error-message">
        {formErrors[camelCasifyString(inputField.name)]}
      </div>
    );
  }
};
