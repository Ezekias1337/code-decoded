import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
// Functions, Helpers, Utils, and Hooks
import getLoggedInUser from "../functions/network/getLoggedInUser";
import { setAuthState } from "../authentication/authState";
// Constants
import { UserReturnedFromDB } from "../constants/interfaces/user";

// Define the shape of the AuthState
interface AuthState {
  user: UserReturnedFromDB | null;
  loading: boolean;
}

// Define action types
type AuthAction =
  | { type: "SET_USER"; payload: UserReturnedFromDB | null }
  | { type: "SET_LOADING"; payload: boolean };

// Create a reducer to manage AuthState
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload, loading: false };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

// Create the AuthContext with default values
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: { user: null, loading: true },
  dispatch: () => undefined,
});

// AuthProvider component to provide the context to its children
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true,
  });

  useEffect(() => {
    const checkUserAuth = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const user = await getLoggedInUser();
      dispatch({ type: "SET_USER", payload: user });
      setAuthState({ user, loading: false }); // Update the global state
    };

    checkUserAuth();
  }, []);

  useEffect(() => {
    setAuthState(state); // Keep the global state in sync
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
