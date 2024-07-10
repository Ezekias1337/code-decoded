import organizedVariables from "../variables-organized";

const getColor = (name: string) =>
  organizedVariables.colors.find((variable) => variable.name === name)?.value ||
  "";

export default getColor;

  organizedVariables.colors.find((color) => color.name === "$primary-600")?.value;
