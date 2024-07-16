// Interfaces and Types
import { UserReturnedFromDB } from "../../constants/interfaces/user";
import {
  SetStateHookBoolean,
  SetStateHookString,
} from "../../components/form/dependents/constants/formProps";
import { FormEvent, SetStateAction, Dispatch } from "react";
// Functions, Helpers, Utils, and Hooks
import fetchData from "../network/fetchData";
import { setAuthState } from "../../authentication/authState";

const login = async (
  e: FormEvent,
  emailAddress: string,
  password: string,
  setFormErrorMessage: SetStateHookString,
  setLoginInProgress: SetStateHookBoolean,
  setUserData: Dispatch<SetStateAction<UserReturnedFromDB | null>>
): Promise<UserReturnedFromDB> => {
  e.preventDefault();
  setLoginInProgress(true);
  const credentials = { emailAddress: emailAddress, password: password };

  const response = await fetchData("/api/users/login", {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    setLoginInProgress(false);
    setFormErrorMessage("Invalid email or password");
    throw new Error("Failed to login");
  }
  const user = await response.json();
  setUserData(user);
  setAuthState({ user, loading: false });
  setFormErrorMessage("");
  setLoginInProgress(false);

  return user;
};

export default login;
