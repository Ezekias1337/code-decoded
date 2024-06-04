// Library Imports
import { ReactNode } from "react";

export const renderSelectOptions = (arrayOfOptions: string[]): ReactNode[] => {
  const arrayOfInputFields = [];

  for (const option of arrayOfOptions) {
    arrayOfInputFields.push(
      <option value={option} key={option} id={`${option}-option`}>
        {option}
      </option>
    );
  }
  return arrayOfInputFields;
};
