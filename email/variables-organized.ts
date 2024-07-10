// variables-organized.ts

import variables from "./variables.json";

// Define types for your variables
type ColorVariable = {
  name: string;
  value: string;
};

type FontSizeVariable = {
  name: string;
  value: string;
};

type BoxShadowVariable = {
  name: string;
  value: string;
};

type BorderRadiusVariable = {
  name: string;
  value: string;
};

// Function to categorize variables
const categorizeVariables = (variables: any) => {
  const colorVariables: ColorVariable[] = [];
  const fontSizeVariables: FontSizeVariable[] = [];
  const boxShadowVariables: BoxShadowVariable[] = [];
  const borderRadiusVariables: BorderRadiusVariable[] = [];
  // Add more categories as needed

  variables.variables.forEach((variable: any) => {
    if (variable.name.endsWith("shadow") || variable.name.endsWith("glow")) {
      boxShadowVariables.push({
        name: variable.name,
        value: variable.value,
      });
    } else if (
      variable.name.startsWith("$primary") ||
      variable.name.startsWith("$success") ||
      variable.name.startsWith("$error") ||
      variable.name.startsWith("$info") ||
      variable.name.startsWith("$warning") ||
      variable.name.startsWith("$neutral") ||
      variable.name.startsWith("$transparent")
    ) {
      colorVariables.push({
        name: variable.name,
        value: variable.value,
      });
    } else if (
      variable.name.startsWith("$header") ||
      variable.name.startsWith("$paragraph") ||
      variable.name.startsWith("$small") ||
      variable.name.startsWith("$extra-small")
    ) {
      fontSizeVariables.push({
        name: variable.name,
        value: variable.value,
      });
    } else if (variable.name.startsWith("$border")) {
      borderRadiusVariables.push({
        name: variable.name,
        value: variable.value,
      });
    }
  });

  return {
    colors: colorVariables,
    fontSizes: fontSizeVariables,
    boxShadows: boxShadowVariables,
    borderRadiusVariables: borderRadiusVariables,
  };
};

// Organize variables into categories
const organizedVariables = categorizeVariables(variables);

// Export organized variables
export default organizedVariables;
