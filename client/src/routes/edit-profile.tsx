// Library Imports
import { useState, useEffect } from "react";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
import getUser from "../functions/network/getUser.ts.ts";
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString.ts";

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
} from "../../../shared/constants/regexPatterns";
// Components
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader.tsx";
import { Loader } from "../components/general-page-layout/loader/Loader.tsx";
import { Form } from "../components/form/Form.tsx";
// CSS
import "../css/page-specific/edit-profile.scss";

const EditProfile = () => {
  const authObject = useAuth();
  const dispatch = authObject.dispatch;
  // Authenticated User
  const user = authObject.state.user;
  // User who is being edited
  const { id: userIdToEdit } = Route.useSearch();

  const [userToEdit, setUserToEdit] = useState<UserReturnedFromDB | null>(null);
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
    if (submissionSuccessful || redirectUrl !== "/user-home") {
      navigate({ to: redirectUrl });
    }
  }, [submissionSuccessful, navigate, redirectUrl]);

  useEffect(() => {
    if (userIdToEdit === user?._id) {
      setUserToEdit(user);
    } else if (userIdToEdit !== user?._id || userToEdit === null) {
      const fetchUser = async () => {
        const userFromDB = await getUser(userIdToEdit);
        setUserToEdit(userFromDB);
      };
      fetchUser();
    }
  }, [userIdToEdit, userToEdit, user]);

  /* 
    Instantiate the Input Fields array with the appropriate information
  */

  useEffect(() => {
    if (userToEdit !== null) {
      let tempInputFields: InputField[] = [];

      tempInputFields = [
        {
          name: "Name",
          label: "Name",
          additionalClassNames: "",
          placeholder: "Name",
          defaultValue: userToEdit?.name,
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
          defaultValue: userToEdit?.phoneNumber,
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
          defaultValue: userToEdit?.emailAddress,
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
          name: "Role",
          label: "Role",
          additionalClassNames: "",
          defaultValue: userToEdit?.role[0],
          placeholder: "User",
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
      ];

      let roleFieldOptions: string[];

      if (user?.role[0] === "Admin") {
        roleFieldOptions = ["Admin", "Admin Assistant", "Employee", "User"];
        const roleField = {
          ...tempInputFields[3],
          defaultValue: user?.role[0],
          dropdownOptions: roleFieldOptions,
        };
        tempInputFields[3] = roleField;
      } else if (user?.role[0] === "Admin Assistant") {
        roleFieldOptions = ["Admin Assistant", "Employee", "User"];
        const roleField = {
          ...tempInputFields[3],
          defaultValue: user?.role[0],
          dropdownOptions: roleFieldOptions,
        };
        tempInputFields[3] = roleField;
      } else if (user?.role[0] === "Employee") {
        roleFieldOptions = ["Employee", "User"];
        const roleField = {
          ...tempInputFields[3],
          defaultValue: user?.role[0],
          dropdownOptions: roleFieldOptions,
        };
        tempInputFields[3] = roleField;
      } else {
        tempInputFields.slice(0, -1);
      }

      setArrayOfInputFields(tempInputFields);
    }
  }, [formInputData, user, userToEdit]);

  const customSubmitArgsSubmitCase = {
    argument1: arrayOfInputFields,
    argument2: formInputData,
    argument3: setFormErrorData,
    argument4: "/api/users/update-user",
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
          body: JSON.stringify({ ...formStateWithDefaultValues, userIdToEdit }),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message);
        }

        setFormInputData({});
        setErrorHook({});
        const payloadForDispatch = {
          ...userToEdit,
          ...formStateWithDefaultValues,
          role: [formStateWithDefaultValues.role],
        };
        dispatch({
          type: "SET_USER",
          payload: payloadForDispatch as UserReturnedFromDB,
        });
        setSubmissionSuccessful(true);
        return response.json();
      } catch (error) {
        if (
          (error as Error).message ===
          "Email Address on file is different than the one provided, verification code sent."
        ) {
          setRedirectUrl(`/verify-email/?id=${userToEdit?._id}&update=${true}`);
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
    <div className="edit-profile">
      <HelmetProvider>
        <Helmet>
          <title>Code Decoded | Edit Profile</title>
        </Helmet>
      </HelmetProvider>

      {user === null ? (
        <div className="padding-top-80 padding-bottom-80">
          <Loader variant="primary" />
        </div>
      ) : (
        <>
          <PageHeader title="Edit Profile" />

          {arrayOfInputFields ? (
            <Form
              inputFields={arrayOfInputFields}
              apiEndpoint="/api/users/update-user"
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
                  "/api/users/update-user",
                  "PATCH"
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

export const Route = createFileRoute("/edit-profile/$id" as never)({
  component: EditProfile,
  validateSearch: (search) => {
    if (!search.id) {
      throw redirect({
        to: "/user-home",
      });
    }

    return {
      id: search.id as string,
    };
  },
  beforeLoad: async ({ location }) => {
    const userAuthenticated = isAuthenticated();

    if (!userAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
