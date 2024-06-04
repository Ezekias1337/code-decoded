// Library Imports
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Functions, Helpers, and Utils
import { handleSubmit } from "./dependents/functions/handleSubmit";
import { renderInputFields } from "./dependents/functions/renderInputFields";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import {
  FormProps /* CustomSubmitArgs */,
} from "./dependents/constants/formTypes";
// Components
import { Button } from "../button/Button";
// CSS
import "./dependents/css/form.scss";

export const Form: FC<FormProps> = ({
  inputFields,
  apiEndpoint,
  formId,
  setStateHook,
  setErrorHook,
  formState,
  formErrors,
  button1Text,
  button1Variant,
  button1Loading = undefined,
  button2Text = undefined,
  button2Type = undefined,
  button2Variant = undefined,
  button2Loading,
  formBackgroundIsImage,
  buttonSize = "small",
  customSubmitFunction,
  customSubmitArgs,
  redirectUrl,
}) => {
  const navigate = useNavigate();
  const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
  const [postingToServerInProgress, setPostingToServerInProgress] =
    useState(false);

  const initialFormData: Record<string, string> = {};
  inputFields.forEach((field) => {
    initialFormData[camelCasifyString(field.name)] = "";
  });

  useEffect(() => {
    if (submissionSuccessful && redirectUrl) {
      navigate(redirectUrl);
    }
  }, [submissionSuccessful, navigate, redirectUrl]);

  return (
    <form
      onSubmit={(e) => {
        if (customSubmitFunction) {
          customSubmitArgs
            ? customSubmitFunction(e, customSubmitArgs)
            : console.error("customSubmitArgs is undefined");
        } else {
          handleSubmit(
            e,
            inputFields,
            formState,
            setErrorHook,
            apiEndpoint,
            "POST",
            {
              "Content-Type": "application/json",
            },
            /* redirectUrl, */
            setSubmissionSuccessful,
            setPostingToServerInProgress
          );
        }
      }}
      id={formId}
      className="padding-left-and-right form"
    >
      {renderInputFields(inputFields, formErrors, setStateHook, setErrorHook)}
      <div
        className={`form-button-container ${
          formBackgroundIsImage === true ? "position-relative" : ""
        }`}
      >
        <Button
          variant={button1Variant}
          type="submit"
          text={button1Text}
          buttonId={`${formId}-button-1`}
          buttonSize={buttonSize}
          loading={
            button1Loading !== undefined
              ? button1Loading
              : postingToServerInProgress
          }
        />
        {button2Text !== undefined &&
        button2Type !== undefined &&
        button2Variant !== undefined ? (
          <Button
            variant={button2Variant}
            type={button2Type}
            text={button2Text}
            buttonId={`${formId}-button-2`}
            buttonSize={buttonSize}
            loading={button2Loading !== undefined ? button2Loading : false}
          />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};
