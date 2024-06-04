// Library Imports
import { useState } from "react";
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
import { FormState } from "../components/form/dependents/constants/formProps";
import { Field } from "../components/form/dependents/constants/formTypes";
// Components
import NavBar from "../components/general-page-layout/navbar/Navbar";
import Footer from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
import { Form } from "../components/form/Form";
// CSS
import "../css/page-specific/login.scss";

const Login = () => {
  const [formInputData, setFormInputData] = useState<FormState>({
    emailAddress: "",
    password: "",
  });
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const arrayOfInputFields: Field[] = [
    {
      name: "Email",
      label: "Email",
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

  return (
    <section className="login">
      <NavBar />

      <div className="login-wrapper padding-bottom-80">
        <PageHeader title="Iniciar Sesión" />
        <Form
          inputFields={arrayOfInputFields}
          apiEndpoint="/api/users/login"
          formId="admin-login"
          setStateHook={setFormInputData}
          setErrorHook={setFormErrorData}
          formState={formInputData}
          formErrors={formErrorData}
          button1Text="Log In"
          button1Variant="primary-dark"
          formBackgroundIsImage={true}
          buttonSize="large"
          redirectUrl="/admin-home"
        />
        <div className="forgot-password-wrapper full-flex justify-content-left padding-left-and-right">
          <GeneralLink
            text="Forgot your password?"
            url="/forgot-password"
            openInNewTab={false}
            additionalClassNames="position-relative"
            variant="neutral"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Login;
