// Interfaces and Types
import { FormEvent } from "react";
import {
  InputFieldProps,
  DropdownFieldProps,
  CreditCardFieldProps,
  FormState,
  SetStateHookForm,
} from "./formProps";

/* 
  ? This is a type guard to help the typescript compiler since
  ? I'm using a union type in the renderInputFields function
*/
export type Field = InputField | DropdownField | CreditCardField;

/* 
  ? This type is used for the switch statement just to determine the type
  ? of field to return
*/
export type FieldType =
  | "creditCard"
  | "date"
  | "dropdown"
  | "email"
  | "password"
  | "phoneNumber"
  | "quantity"
  | "switch"
  | "text"
  | "textArea";

export interface InputField extends InputFieldProps {
  type: FieldType;
}

export interface DropdownField extends DropdownFieldProps {
  type: FieldType;
}

export interface CreditCardField extends CreditCardFieldProps {
  type: FieldType;
}

export interface CustomSubmitArgs<
  T1 = unknown,
  T2 = unknown,
  T3 = unknown,
  T4 = unknown,
  T5 = unknown,
  T6 = unknown
> {
  argument1: T1;
  argument2: T2;
  argument3?: T3;
  argument4?: T4;
  argument5?: T5;
  argument6?: T6;
}

export interface FormUpdateEvent {
  target: {
    name: string;
    value: string;
  };
}

export interface SwitchUpdateEvent {
  target: {
    name: string;
    checked: boolean;
  };
}

export interface FormProps {
  inputFields: Field[];
  apiEndpoint: string;
  formId: string;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
  formState: FormState;
  formErrors: FormState;
  button1Text: string;
  button1Variant:
    | "primary"
    | "primary-dark"
    | "warning"
    | "info"
    | "neutral"
    | "neutral-dark"
    | "success"
    | "error";
  button1Loading?: boolean;
  button2Text?: string;
  button2Type?: "button" | "reset";
  button2Variant?:
    | "primary"
    | "primary-dark"
    | "warning"
    | "info"
    | "neutral"
    | "neutral-dark"
    | "success"
    | "error";
  button2Loading?: boolean;
  buttonSize?: "small" | "medium" | "large";
  formBackgroundIsImage?: boolean;
  customSubmitFunction?: (
    e: FormEvent<HTMLFormElement>,
    args: CustomSubmitArgs
  ) => void;
  customSubmitArgs?: CustomSubmitArgs;
  redirectUrl?: string;
}
