// Functions, Helpers, and Utils
import { generateOriginUrl } from "../../../../shared/helpers/generateOriginUrl";
// Constants
const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT;
const ORIGIN_URL_BASE = import.meta.env.VITE_ORIGIN_URL_BASE;
const IS_DEV = import.meta.env.VITE_IS_DEV;

const fetchData = async (input: RequestInfo, init?: RequestInit) => {
  const baseURL = generateOriginUrl(ORIGIN_URL_BASE, BACKEND_PORT, IS_DEV);
  const url = `${baseURL}${input}`;
  console.log("url: ", url);

  const response = await fetch(url, {
    ...init,
    credentials: "include",
    redirect: "follow",
  });

  if (response.ok || response.redirected) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    console.log(errorMessage);
    throw Error(errorMessage);
  }
};

export default fetchData;
