// Functions, Helpers, and Utils
import { generateOriginUrl } from "../../../../shared/helpers/generateOriginUrl";
// Constants
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const ORIGIN_URL_BASE = import.meta.env.VITE_ORIGIN_URL_BASE;
const IS_DEV = import.meta.env.VITE_IS_DEV;

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const baseURL = generateOriginUrl(ORIGIN_URL_BASE, BACKEND_PORT, IS_DEV);
  const url = `${baseURL}${input}`;

  const response = await fetch(url, {
    ...init,
    credentials: "include",
    redirect: "follow",
  });

  if (response.ok || response.redirected) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.message;
    const consoleError = errorBody.error;

    console.log(errorBody);
    console.log(errorMessage);
    console.log(consoleError);

    // Throwing a custom error object that preserves the original error details
    throw { message: errorMessage, error: consoleError };
  }
};

export default fetchData;
