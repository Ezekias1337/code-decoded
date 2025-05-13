// Library Imports
import { useState, useEffect } from "react";
// Functions, Helpers, and Utils
import getUser from "../functions/network/getUser.ts.ts";
// Constants
import { UserReturnedFromDB } from "../constants/interfaces/user";

const useUserToEdit = (userIdToEdit: string, user: UserReturnedFromDB | null) => {
  const [userToEdit, setUserToEdit] = useState<UserReturnedFromDB | null>(null);

  useEffect(() => {
    if (userIdToEdit === user?.id) {
      setUserToEdit(user);
    } else if (userIdToEdit !== user?.id || userToEdit === null) {
      const fetchUser = async () => {
        const userFromDB = await getUser(userIdToEdit);
        setUserToEdit(userFromDB);
      };
      fetchUser();
    }
  }, [userIdToEdit, userToEdit, user]);

  return userToEdit;
};

export default useUserToEdit;
