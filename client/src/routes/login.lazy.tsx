// Library Imports
import { useState, useEffect, FormEvent } from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../functions/network/fetchData";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
// Constants
import {
  textAndNumbersNoSpacesPattern,
  textAndNumbersAndSpecialCharsNoSpacesPattern,
} from "../../../shared/constants/regexPatterns";
import {
  emailAutocomplete,
  currentPasswordAutocomplete,
} from "../components/form/dependents/constants/formAutocompleteStrings";
// Interfaces and Types
import {
  FormState,
  SetStateHookForm,
} from "../components/form/dependents/constants/formProps";
import {
  Field,
  InputField,
} from "../components/form/dependents/constants/formTypes";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Loader } from "../components/general-page-layout/loader/Loader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
import { Form } from "../components/form/Form";
import { Alert } from "../components/alert/Alert";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import BlobScene from "../components/page-specific/home/BlobScene";
// CSS
import "../css/page-specific/login.scss";

const LogIn = () => {
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [formErrorMessage, setFormErrorMessage] = useState<string>("");
  const [loginSuccessful, setLoginSuccessful] = useState<boolean>(false);
  const [loginInProgress, setLoginInProgress] = useState<boolean>(false);
  const navigate = useNavigate({ from: "/login" });
  const arrayOfInputFields: Field[] = [
    {
      name: "Email Address",
      label: "Email Address",
      additionalClassNames: "",
      placeholder: "Email",
      columns: "12",
      type: "email",
      inputType: "email",
      inputMode: "text",
      pattern: textAndNumbersNoSpacesPattern,
      autoComplete: emailAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
    {
      name: "Password",
      label: "Password",
      additionalClassNames: "",
      placeholder: "Password",
      columns: "12",
      type: "password",
      inputMode: "text",
      pattern: textAndNumbersAndSpecialCharsNoSpacesPattern,
      autoComplete: currentPasswordAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
  ];

  useEffect(() => {
    /* if (loginSuccessful) {
      navigate({ to: "/user-home" });
    } */
  }, [loginSuccessful, navigate]);

  const customSubmitArgsSubmitCase = {
    argument1: arrayOfInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/users/login",
    argument5: "POST",
  };

  const createNewConsultation = async (
    e: FormEvent,
    inputFields: InputField[],
    formState: FormState,
    setErrorHook: SetStateHookForm,
    apiEndpoint: string,
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
  ): Promise<unknown> => {
    e.preventDefault();
    setLoginInProgress(true);

    const errors: Record<string, string> = {};
    const formStateWithDefaultValues = { ...formState };

    inputFields.forEach((field) => {
      if (!formState[camelCasifyString(field.name)]) {
        if (field.defaultValue) {
          formStateWithDefaultValues[camelCasifyString(field.name)] =
            field.defaultValue;
        } else {
          errors[camelCasifyString(field.name)] = `${field.name} is required`;
          setLoginInProgress(false);
        }
      }
    });

    setErrorHook(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetchData(apiEndpoint, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formStateWithDefaultValues),
        });

        setFormInputData({});
        setErrorHook({});

        setLoginSuccessful(true);
        return response.json();
      } catch (error) {
        console.log(error);
        setLoginInProgress(false);

        /* errors[camelCasifyString(inputFields[inputFields.length - 1].name)] =
          `Failed to login, please try again later.`;
        setErrorHook(errors); */
        setFormErrorMessage("Failed to login, please try again later.");
      }
    }
  };

  return (
    <div className="login">
      <HelmetProvider>
      <Helmet>
        <title>Code Decoded | Login</title>
      </Helmet>
    </HelmetProvider>
      
      <PageHeader title="Login" />
      <div className="background-svg">
        <BlobScene />
      </div>

      <div className="alert-container padding-bottom-20">
        {formErrorMessage !== "" ? (
          <Alert
            variant="error"
            bodyText="Unable to login, please check your email and password."
            additionalClassNames="display-none"
            icon={faExclamationTriangle}
          />
        ) : (
          <></>
        )}
      </div>

      {arrayOfInputFields ? (
        <Form
          inputFields={arrayOfInputFields}
          apiEndpoint="/api/users/login"
          formId="login-form"
          setStateHook={setFormInputData}
          setErrorHook={setFormErrorData}
          formState={formInputData}
          formErrors={formErrorData}
          button1Text="Submit"
          button1Variant="primary-dark"
          button1Loading={loginInProgress}
          customSubmitFunction={(e) =>
            createNewConsultation(
              e,
              arrayOfInputFields,
              formInputData,
              setFormErrorData,
              "/api/users/login",
              "POST"
            )
          }
          customSubmitArgs={customSubmitArgsSubmitCase}
        />
      ) : (
        <Loader variant="primary" />
      )}
      <div className="form-link-container padding-left-and-right display-flex flex-direction-column gap-20 padding-bottom-80">
        <GeneralLink
          text="Don't have an account?"
          url="/register"
          openInNewTab={false}
          variant="primary"
        />
        <GeneralLink
          text="Forgot Password?"
          url="/register"
          openInNewTab={false}
          variant="primary"
        />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/login" as never)({
  component: LogIn,
});
