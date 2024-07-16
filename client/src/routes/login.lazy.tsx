// Library Imports
import { useState, useEffect } from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Functions, Helpers, Utils, and Hooks
import login from "../functions/network/login";
import { useAuth } from "../context/AuthContext";
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
  //SetStateHookForm,
} from "../components/form/dependents/constants/formProps";
import {
  Field,
  //InputField,
} from "../components/form/dependents/constants/formTypes";
import { UserReturnedFromDB } from "../constants/interfaces/user";
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
  const authObj = useAuth();
  const user = authObj.state.user;
  const dispatch = authObj.dispatch;

  const [formInputData, setFormInputData] = useState<FormState>({
    emailAddress: "",
    password: "",
  });
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [formErrorMessage, setFormErrorMessage] = useState<string>("");
  const [loginInProgress, setLoginInProgress] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserReturnedFromDB | null>(null);
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

  /* 
    In the form submit function it sets userData to the response from the API call,
    This useEffect will update the global state with the user object
  */

  useEffect(() => {
    if (userData) {
      dispatch({ type: "SET_USER", payload: userData });
    }
  }, [userData, dispatch]);

  /* 
    Once the user object is set in the global state, we navigate to the user home page
  */

  useEffect(() => {
    if (user !== null) {
      navigate({ to: "/user-home" });
    }
  }, [user, navigate]);

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
            login(
              e,
              formInputData.emailAddress as string,
              formInputData.password as string,
              setFormErrorMessage,
              setLoginInProgress,
              setUserData
            )
          }
          customSubmitArgs={{
            argument1: formInputData.emailAddress as string,
            argument2: formInputData.password as string,
            argument3: setFormErrorMessage,
            argument4: setLoginInProgress,
            argument5: setUserData,
          }}
        />
      ) : (
        <Loader variant="primary" />
      )}
      <div className="form-link-container padding-left-and-right display-flex flex-direction-column gap-20 padding-bottom-80">
        <GeneralLink
          text="Don't have an account?"
          url="/register"
          openInNewTab={false}
          variant="neutral"
        />
        <GeneralLink
          text="Forgot Password?"
          url="/register"
          openInNewTab={false}
          variant="neutral"
        />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/login" as never)({
  component: LogIn,
});
