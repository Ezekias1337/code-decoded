import { combineReducers } from "redux";
import languageReducer from "./individual/languageReducer";
import caseReducer from "./individual/caseReducer";

export const rootReducer = combineReducers({
  language: languageReducer,
  cases: caseReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
