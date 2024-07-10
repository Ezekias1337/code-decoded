import organizedVariables from "../variables-organized";

const getBorderRadius = (name: string) =>
  organizedVariables.borderRadiusVariables.find(
    (variable) => variable.name === name
  )?.value || "";

export default getBorderRadius;
