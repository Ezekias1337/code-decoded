// Library Imports
import { Dispatch, Action } from "@reduxjs/toolkit";
// Constants
const typeBase = "cases/";
// Interfaces and Types
import { CaseReturnedFromDB } from "../../constants/interfaces/case";
export interface GetPendingCasesAction {
  type: typeof UPDATE_PENDING_CASES;
  payload: string;
}
// Action Types
export const UPDATE_PENDING_CASES = `${typeBase}UPDATE_PENDING_CASES`;
export const UPDATE_CASES_RESET = `${typeBase}UPDATE_CASES_RESET`;

export const updatePendingCases = (pendingCases: CaseReturnedFromDB[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: UPDATE_PENDING_CASES,
      payload: pendingCases,
    });
  };
};
