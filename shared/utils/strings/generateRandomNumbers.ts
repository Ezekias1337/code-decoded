const generateRandomNumbers = (
  length: number,
  numberOrString: "number" | "string"
): string | number => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  if (numberOrString === "number") {
    return result;
  } else {
    return result.toString();
  }
};

export default generateRandomNumbers;
