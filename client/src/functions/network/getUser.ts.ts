// Interfaces and Types
import { UserReturnedFromDB } from "../../constants/interfaces/user";
// Functions, Helpers, Utils, and Hooks
import fetchData from "./fetchData";

const getUser = async (userId: string): Promise<UserReturnedFromDB | null> => {
  try {
    const response = await fetchData(`/api/users/:${userId}`, {
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
    return null;
  }
};

export default getUser;
