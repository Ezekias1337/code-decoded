// Library Imports
import { Dispatch, SetStateAction } from "react";
// Interfaces and Types
import { FormState } from "../constants/formProps";
import { FormUpdateEvent, SwitchUpdateEvent } from "../constants/formTypes";

export const handleFormChange = (
  e: FormUpdateEvent,
  setStateHook: Dispatch<SetStateAction<FormState>>,
  setErrorHook: Dispatch<SetStateAction<FormState>>
): void => {
  setStateHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));

  setErrorHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: "",
  }));
};

export const handleSwitchChange = (
  e: SwitchUpdateEvent,
  setStateHook: Dispatch<SetStateAction<FormState>>,
  setErrorHook: Dispatch<SetStateAction<FormState>>
): void => {
  setStateHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: e.target.checked,
  }));

  setErrorHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: "",
  }));
};
