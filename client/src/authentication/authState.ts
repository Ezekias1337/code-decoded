// Interfaces and Types
import { UserReturnedFromDB } from "../constants/interfaces/user";

interface AuthState {
  user: UserReturnedFromDB | null;
  loading: boolean;
}

let authState: AuthState = { user: null, loading: true };

export const setAuthState = (newState: Partial<AuthState>) => {
  authState = { ...authState, ...newState };
};

export const isAuthenticated = (): boolean => !!authState.user;
