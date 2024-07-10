import organizedVariables from "../variables-organized";

const getFontSize = (name: string) =>
  organizedVariables.fontSizes.find((variable) => variable.name === name)
    ?.value || "";

export default getFontSize;
