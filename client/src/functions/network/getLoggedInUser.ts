// Interfaces and Types
import { UserReturnedFromDB } from "../../constants/interfaces/user";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const getLoggedInUser = async (): Promise<UserReturnedFromDB | null> => {
  try {
    const response = await fetchData("/api/users/get-authenticated-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.status === 200) {
      return await response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting logged in user:", error);
    return null;
  }
};

export default getLoggedInUser;
