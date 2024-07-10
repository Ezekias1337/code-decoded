import organizedVariables from "../variables-organized";

const getBoxShadow = (name: string) =>
  organizedVariables.boxShadows.find((variable) => variable.name === name)
    ?.value || "";

export default getBoxShadow;
