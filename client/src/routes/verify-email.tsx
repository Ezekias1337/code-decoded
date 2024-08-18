// Library Imports
import { useState, useEffect } from "react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// Context
import { isAuthenticated } from "../authentication/authState.ts";
import { useAuth } from "../context/AuthContext.tsx";
// Types and Interfaces
import { UserReturnedFromDB } from "../constants/interfaces/user.ts";
import {
  InputField,
  Field,
} from "../components/form/dependents/constants/formTypes.ts";
import {
  FormState,
  SetStateHookForm,
} from "../components/form/dependents/constants/formProps.ts";
import { FormEvent } from "react";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../functions/network/fetchData.ts";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString.ts";
import useUserToEdit from "../hooks/useUserToEdit.ts";
// Constants
import { numberOnlyPattern } from "../../../shared/constants/regexPatterns.ts";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader.tsx";
import { Loader } from "../components/general-page-layout/loader/Loader.tsx";
import { Alert } from "../components/alert/Alert.tsx";
import { Form } from "../components/form/Form.tsx";
// CSS
import "../css/page-specific/verify-email.scss";

const EditProfile = () => {
  const authObject = useAuth();
  const dispatch = authObject.dispatch;
  const user = authObject.state.user;

  // User who is being edited
  const { id: userIdToEdit } = Route.useSearch();
  const userToEdit = useUserToEdit(userIdToEdit, user);
  
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [submissionSuccessful, setSubmissionSuccessful] =
    useState<boolean>(false);
  const [submissionInProgress, setSubmissionInProgress] =
    useState<boolean>(false);
  const [redirectUrl, setRedirectUrl] = useState<string>("/user-home");
  
  const navigate = useNavigate({ from: "/edit-profile" });
  const [arrayOfInputFields, setArrayOfInputFields] = useState<Field[]>();

  useEffect(() => {
    if (submissionSuccessful) {
      navigate({ to: redirectUrl });
    }
  }, [submissionSuccessful, navigate, redirectUrl]);

  /* 
    Instantiate the Input Fields array with the appropriate information
  */

  useEffect(() => {
    if (userIdToEdit !== null) {
      let tempInputFields: InputField[] = [];

      tempInputFields = [
        {
          name: "Verification Code",
          label: "Verification Code",
          additionalClassNames: "",
          placeholder: "******",
          columns: "12",
          type: "text",
          inputType: "tel",
          inputMode: "tel",
          pattern: numberOnlyPattern,
          maxLength: 6,
          parentFormState: formInputData,
          setStateHook: setFormInputData,
          setErrorHook: setFormErrorData,
          required: true,
        },
      ];

      setArrayOfInputFields(tempInputFields);
    }
  }, [formInputData, userIdToEdit]);

  const customSubmitArgsSubmitCase = {
    argument1: arrayOfInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/users/verify-email",
    argument5: "PATCH",
  };

  const updateProfile = async (
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
          body: JSON.stringify({
            ...formStateWithDefaultValues,
            userId: userIdToEdit,
          }),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }

        setFormInputData({});
        setErrorHook({});
        const payloadForDispatch = {
          ...userToEdit,
        };
        dispatch({
          type: "SET_USER",
          payload: payloadForDispatch as UserReturnedFromDB,
        });
        setSubmissionSuccessful(true);
        return response.json();
      } catch (error) {
        // Narrow down the type of error to access its message
        if (error instanceof Error) {
          if (
            error.message ===
            "Email Address on file is different than the one provided, verification code sent."
          ) {
            setRedirectUrl("/verify-email?update=true");
          }

          setSubmissionInProgress(false);

          errors[camelCasifyString(inputFields[inputFields.length - 1].name)] =
            `Failed to update user, please try again`;
          setErrorHook(errors);
        } else {
          // Handle cases where the error is not an instance of Error
          setSubmissionInProgress(false);
          errors[camelCasifyString(inputFields[inputFields.length - 1].name)] =
            `An unexpected error occurred`;
          setErrorHook(errors);
        }
      }
    }
  };

  return (
    <div className="verify-email">
      <HelmetProvider>
        <Helmet>
          <title>Code Decoded | Verify Email</title>
        </Helmet>
      </HelmetProvider>

      {userIdToEdit === null ? (
        <div className="padding-top-80 padding-bottom-80">
          <Loader variant="primary" />
        </div>
      ) : (
        <>
          <PageHeader title="Verify Email" />

          <Alert
            variant="info"
            bodyText="For verification purposes, please enter the verification code sent to your email address."
            icon={faCircleCheck}
            additionalClassNames="padding-bottom-40"
          />

          {arrayOfInputFields ? (
            <Form
              inputFields={arrayOfInputFields}
              apiEndpoint="/api/users/verify-email"
              formId="contact-us-form"
              setStateHook={setFormInputData}
              setErrorHook={setFormErrorData}
              formState={formInputData}
              formErrors={formErrorData}
              button1Text="Submit"
              button1Variant="primary-dark"
              button1Loading={submissionInProgress}
              customSubmitFunction={(e) =>
                updateProfile(
                  e,
                  arrayOfInputFields,
                  formInputData,
                  setFormErrorData,
                  "/api/users/verify-email",
                  "POST"
                )
              }
              customSubmitArgs={customSubmitArgsSubmitCase}
            />
          ) : (
            <Loader variant="primary" />
          )}
        </>
      )}
    </div>
  );
};

export const Route = createFileRoute("/verify-email/$id$update" as never)({
  component: EditProfile,
  validateSearch: (search) => {
    return {
      id: search.id as string,
      update: search.update as boolean,
    };
  },
  beforeLoad: async ({ location, search }) => {
    const userAuthenticated = isAuthenticated();
    const { update } = search;

    if (!userAuthenticated && !update) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
