// Library Imports
import { FC, useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// Functions, Helpers, and Utils
import { handleFormChange } from "../../functions/handleFormChange";
import { renderSelectOptions } from "../../functions/renderSelectOptions";
import { camelCasifyString } from "../../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { DropdownFieldProps } from "../../constants/formProps";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const DropdownInput: FC<DropdownFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  defaultValue = "",
  dropdownOptions,
  required,
  setStateHook,
  setErrorHook,
}) => {
  const arrayOfOptions = useMemo(
    () => renderSelectOptions(dropdownOptions),
    [dropdownOptions]
  );
  const [showMenu, setShowMenu] = useState(false);
  const [iconToShow, setIconToShow] = useState<IconProp>(faChevronDown);
  
  useEffect(() => {
    if(showMenu) {
      setIconToShow(faChevronUp);
    } else {
      setIconToShow(faChevronDown);
    }
  }, [showMenu])

  return (
    <div className={`input-wrapper select-wrapper`}>
      <label
        htmlFor={kebabCasifyString(name)}
        className={`form-label`}
      >
        {label}
      </label>
      <select
        className={`input-field ${additionalClassNames}`}
        name={camelCasifyString(name)}
        aria-label={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        defaultValue={defaultValue !== "" ? defaultValue : ""}
        required={required}
        onChange={(e) => {
          handleFormChange(e, setStateHook, setErrorHook);
        }}
        onClick={() => setShowMenu(!showMenu)}
      >
        {arrayOfOptions}
      </select>
      <FontAwesomeIcon
          icon={iconToShow}
          className="select-dropdown-arrow"
          onClick={() => setShowMenu(!showMenu)}
          size="lg"
          key={`${name}-menu-arrow`}
        />
    </div>
  );
};
