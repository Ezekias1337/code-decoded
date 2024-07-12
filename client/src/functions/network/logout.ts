// Functions, Helpers, Utils, and Hooks
import fetchData from "../network/fetchData";
import { setAuthState } from "../../authentication/authState";

const logout = async () => {
  await fetchData("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  setAuthState({ user: null, loading: false }); // Clear global state
};

export default logout;
