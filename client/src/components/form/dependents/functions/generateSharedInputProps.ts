// Interfaces and Types
import { Field, InputField } from "../constants/formTypes";
import { FormState, SetStateHookForm } from "../constants/formProps";

/* 
    ? The input fields share the majority of their props. In order to reduce clutter and superflousness this function
    ? is used to provide the input components their props
*/

const generateSharedInputProps = (
  inputField: Field,
  formErrors: FormState,
  setStateHook: SetStateHookForm,
  setErrorHook: SetStateHookForm
): InputField => {
  const sharedInputProps: InputField = {
    name: inputField.name,
    label: inputField.label,
    additionalClassNames: `${inputField.additionalClassNames} ${
      formErrors[inputField.name] ? "form-error" : ""
    }`,
    placeholder: `${inputField.placeholder}`,
    columns: inputField.columns,
    defaultValue: `${
      inputField.defaultValue !== undefined ? inputField.defaultValue : ""
    }`,
    required: inputField.required === true ? true : false,
    inputType: inputField.inputType,
    inputMode: inputField.inputMode,
    pattern: inputField.pattern,
    autoComplete: `${
      inputField.autoComplete !== undefined ? inputField.autoComplete : ""
    }`,
    maxLength: inputField.maxLength !== undefined ? inputField.maxLength : 200,
    childrenToRender:
      inputField.childrenToRender !== undefined
        ? inputField.childrenToRender
        : undefined,
    icon: inputField.icon !== undefined ? inputField.icon : undefined,
    setStateHook: setStateHook,
    setErrorHook: setErrorHook,
    type: inputField.type,
  };

  return sharedInputProps;
};

export default generateSharedInputProps;
