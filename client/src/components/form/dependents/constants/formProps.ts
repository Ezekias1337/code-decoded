// Library Imports
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ChangeEventHandler, Dispatch, ReactNode, SetStateAction } from "react";

export interface FormState {
  [key: string]: string | boolean;
}

export type SetStateHookForm = Dispatch<SetStateAction<FormState>>;
export type SetStateHookString = Dispatch<SetStateAction<string>>;
export type SetStateHookBoolean = Dispatch<SetStateAction<boolean>>;
export type SetStateHookNumber = Dispatch<SetStateAction<number>>;

export interface InputFieldProps {
  name: string;
  label: string;
  additionalClassNames?: string;
  placeholder?: string;
  columns?: string;
  defaultValue?: string;
  value?: string;
  required: boolean;
  inputType?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | undefined;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  pattern?: string;
  autoComplete?: string;
  maxLength?: number;
  parentFormState?: FormState;
  childrenToRender?: ReactNode[] | undefined;
  icon?: IconProp;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
  handleInputChange?: ChangeEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement>;
}

export interface InputFieldPropsState {
  className: string;
  name: string;
  id: string;
  placeholder: string | undefined;
  defaultValue: string;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | undefined;
  inputMode:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  pattern: string;
  maxLength: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
}

export interface DropdownFieldProps extends InputFieldProps {
  dropdownOptions: string[];
}

export interface SwitchFieldProps extends InputFieldProps {
  secondaryLabel?: string;
}

export interface CreditCardFieldProps extends InputFieldProps {
  //creditCardNumber?: string;
}

export interface PhoneNumberCountryCode {
  country: string;
  code: string;
  abbreviation: string;
}

export interface PhoneNumberFlag {
  flagImageSource: string;
  countryCode: string;
}

export interface CountryCodeInputFieldProps {
  showMenu: boolean;
  setShowMenu: SetStateHookBoolean;
  countryImage: string;
  setCountryImage: SetStateHookString;
  countryCode: string;
  setCountryCode: SetStateHookString;
}

export interface CountryCodeFilterProps {
  country: string;
  code: string;
  abbreviation: string;
}
