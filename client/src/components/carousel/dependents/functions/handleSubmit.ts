// Library Imports
import { FormEvent, SetStateAction, Dispatch } from "react";
// Functions, Helpers, and Utils
import { camelCasifyString } from "../../../../../../shared/utils/strings/camelCasifyString";
import fetchData from "../../../../functions/network/fetchData";
// Interfaces and Types
import { InputField } from "../constants/formTypes";
import { FormState, SetStateHookForm } from "../constants/formProps";

export const handleSubmit = async (
  e: FormEvent,
  inputFields: InputField[],
  formState: FormState,
  setErrorHook: SetStateHookForm,
  apiEndpoint: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  headers: HeadersInit,
  /* redirectUrl?: string, */
  setSubmissionSuccessful?: Dispatch<SetStateAction<boolean>>,
  setPostingToServerInProgress?: Dispatch<SetStateAction<boolean>>
) => {
  e.preventDefault();

  // ! Validate the form data here based on inputFields
  const errors: Record<string, string> = {};
  const formStateWithDefaultValues = { ...formState };
  inputFields.forEach((field) => {
    /* 
        ! In order to handle the use case of submitting a form with only defaultValues
        ! and not changing any values must use this variable and update it. If you try to use
        ! setStateHook instead because it's async it'll just send an empty object to the server
      */

    if (!formState[camelCasifyString(field.name)]) {
      if (field.defaultValue) {
        /* const e = {
            target: {
              name: field.name,
              value: field.defaultValue,
            },
          }; */

        formStateWithDefaultValues[camelCasifyString(field.name)] =
          field.defaultValue;
      } else {
        errors[camelCasifyString(field.name)] = `${field.name} is required`;
      }
    } /* else if (
          field.validation &&
          !field.validation(formState[camelCasifyString(field.name)])
        ) {
          errors[camelCasifyString(field.name)] = `Invalid ${field.placeholder}`;
        } */
  });

  setErrorHook(errors);

  if (Object.keys(errors).length === 0 && setPostingToServerInProgress) {
    setPostingToServerInProgress(true);
    try {
      const response = await fetchData(apiEndpoint, {
        method: method,
        headers: headers,
        credentials: "include",
        body: JSON.stringify(formStateWithDefaultValues),
      });

      // Assuming the login is successful based on the response status
      if (response.ok && setSubmissionSuccessful) {
        // Redirect to the specified URL or a default URL after a successful login
        setSubmissionSuccessful(true);
        return response.json();
      }
    } catch (error) {
      setPostingToServerInProgress(false);
      errors["password"] = "Failed to login, check your email and password.";
      setErrorHook(errors);
    }
  }
};
