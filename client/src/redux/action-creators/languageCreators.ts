// Library Imports
import { Dispatch, Action } from "@reduxjs/toolkit";
// Constants
const typeBase = "language/";
// Interfaces and Types
export interface UpdateLanguageAction {
  type: typeof UPDATE_LANGUAGE;
  payload: string;
}
// Action Types
export const UPDATE_LANGUAGE = `${typeBase}UPDATE_LANGUAGE`;
export const UPDATE_LANGUAGE_RESET = `${typeBase}UPDATE_LANGUAGE_RESET`;

export const updateLanguageAction = (languageChoice: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UPDATE_LANGUAGE,
      payload: languageChoice,
    });
  };
};
