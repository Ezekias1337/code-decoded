// Library Imports
import { useState, useEffect } from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Functions, Helpers, Utils and Hooks
import fetchData from "../functions/network/fetchData";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { FormEvent } from "react";
import {
  FormState,
  SetStateHookForm,
} from "../components/form/dependents/constants/formProps";
import {
  Field,
  InputField,
} from "../components/form/dependents/constants/formTypes";
// Constants
import {
  fullNameAutocomplete,
  phoneNumberAutocomplete,
  emailAutocomplete,
} from "../components/form/dependents/constants/formAutocompleteStrings";
import {
  textOnlyPattern,
  phoneNumberPattern,
  emailPattern,
  textAndNumbersPattern,
} from "../../../shared/constants/regexPatterns";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Form } from "../components/form/Form";
import { Loader } from "../components/general-page-layout/loader/Loader";
// CSS
import "../css/page-specific/contact-us.scss";

const ContactUs = () => {
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [submissionSuccessful, setSubmissionSuccessful] =
    useState<boolean>(false);
  const [submissionInProgress, setSubmissionInProgress] =
    useState<boolean>(false);
  const navigate = useNavigate({ from: "/contact-us" });
  const [arrayOfInputFields, setArrayOfInputFields] = useState<Field[]>();

  useEffect(() => {
    if (submissionSuccessful) {
      navigate({ to: "/contact-form-submitted" });
    }
  }, [submissionSuccessful, navigate]);

  /* 
    Instantiate the Input Fields array with the appropriate information
  */

  useEffect(() => {
    let tempInputFields: InputField[] = [];

    tempInputFields = [
      {
        name: "Name",
        label: "Name",
        additionalClassNames: "",
        placeholder: "Name",
        columns: "6",
        type: "text",
        inputType: "text",
        inputMode: "text",
        pattern: textOnlyPattern,
        autoComplete: fullNameAutocomplete,
        maxLength: 60,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Phone Number",
        label: "Phone Number",
        additionalClassNames: "",
        placeholder: "Phone Number",
        columns: "6",
        type: "phoneNumber",
        inputType: "tel",
        inputMode: "tel",
        pattern: phoneNumberPattern,
        autoComplete: phoneNumberAutocomplete,
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Email Address",
        label: "Email Address",
        additionalClassNames: "",
        placeholder: "Email Address",
        columns: "6",
        type: "email",
        inputType: "email",
        inputMode: "email",
        pattern: emailPattern,
        autoComplete: emailAutocomplete,
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Product Tier",
        label: "Product Tier",
        additionalClassNames: "",
        defaultValue: "Static Website or App",
        placeholder: "Static Website or App",
        columns: "6",
        type: "dropdown",
        inputType: "text",
        inputMode: "text",
        maxLength: 30,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
      {
        name: "Describe Your Dream Website Or App",
        label: "Describe Your Dream Website or App",
        additionalClassNames: "",
        placeholder:
          "Tell me about your vision for your website or app. What would you like to see?",
        columns: "12",
        type: "textArea",
        inputType: "text",
        inputMode: "text",
        pattern: textAndNumbersPattern,
        maxLength: 3000,
        parentFormState: formInputData,
        setStateHook: setFormInputData,
        setErrorHook: setFormErrorData,
        required: true,
      },
    ];

    const productTierField = {
      ...tempInputFields[3],
      dropdownOptions: [
        "Digital Business Card",
        "Static Website or App",
        "Dynamic Website or App",
      ],
    };

    tempInputFields[3] = productTierField;

    setArrayOfInputFields(tempInputFields);
  }, [formInputData]);

  const customSubmitArgsSubmitCase = {
    argument1: arrayOfInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/websites-or-apps/create-website-or-app",
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
    setSubmissionInProgress(true);

    const errors: Record<string, string> = {};
    const formStateWithDefaultValues = { ...formState };

    inputFields.forEach((field) => {
      if (!formState[camelCasifyString(field.name)]) {
        if (field.defaultValue) {
          formStateWithDefaultValues[camelCasifyString(field.name)] =
            field.defaultValue;
        } else {
          errors[camelCasifyString(field.name)] = `${field.name} is required`;
          setSubmissionInProgress(false);
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

        setSubmissionSuccessful(true);
        return response.json();
      } catch (error) {
        setSubmissionInProgress(false);

        errors[camelCasifyString(inputFields[inputFields.length - 1].name)] =
          `Failed to submit case, please email us at codedecodedbiz@gmail.com.`;
        setErrorHook(errors);
      }
    }
  };

  return (
    <div className="contact-us">
      <HelmetProvider>
      <Helmet>
        <title>Code Decoded | Contact Us</title>
      </Helmet>
    </HelmetProvider>
      
      <PageHeader title="Contact Us" />

      {arrayOfInputFields ? (
        <Form
          inputFields={arrayOfInputFields}
          apiEndpoint="/api/websites-or-apps/create-website-or-app"
          formId="contact-us-form"
          setStateHook={setFormInputData}
          setErrorHook={setFormErrorData}
          formState={formInputData}
          formErrors={formErrorData}
          button1Text="Submit"
          button1Variant="primary-dark"
          button1Loading={submissionInProgress}
          customSubmitFunction={(e) =>
            createNewConsultation(
              e,
              arrayOfInputFields,
              formInputData,
              setFormErrorData,
              "/api/websites-or-apps/create-website-or-app",
              "POST"
            )
          }
          customSubmitArgs={customSubmitArgsSubmitCase}
        />
      ) : (
        <Loader variant="primary" />
      )}
    </div>
  );
};

export const Route = createLazyFileRoute("/contact-us" as never)({
  component: ContactUs,
});
