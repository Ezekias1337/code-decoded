// Library Imports
import React, { FC, useEffect, useState } from "react";
// Functions, Helpers, Utils and Hooks
import { handleSwitchChange } from "../../functions/handleFormChange";
import { camelCasifyString } from "../../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { SwitchUpdateEvent } from "../../constants/formTypes";
import { SwitchFieldProps } from "../../constants/formProps";

export const SwitchInput: FC<SwitchFieldProps> = ({
  name,
  label,
  secondaryLabel = "",
  additionalClassNames = "",
  defaultValue = false,
  setStateHook,
  setErrorHook,
  handleInputChange = (e: SwitchUpdateEvent) => {
    handleSwitchChange(e, setStateHook, setErrorHook);
  },
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue === "true") {
      setIsChecked(true);
    }
  }, [defaultValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    handleInputChange(e);
  };

  return (
    <div className={`switch-wrapper display-flex`} key={name}>
      <input
        type="checkbox"
        id={kebabCasifyString(name)}
        name={camelCasifyString(name)}
        checked={isChecked}
        onChange={handleChange}
        className={`switch-input ${additionalClassNames}`}
      />
      <label htmlFor={kebabCasifyString(name)} className={`switch-label`}>
        {label}
      </label>
      <label
        htmlFor={kebabCasifyString(name)}
        className="switch-slider"
      ></label>
      {secondaryLabel !== "" && (
        <label htmlFor={kebabCasifyString(name)} className={`switch-label`}>
          {secondaryLabel}
        </label>
      )}
    </div>
  );
};
