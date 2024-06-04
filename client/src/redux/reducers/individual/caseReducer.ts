// Library Imports
import { Action, Reducer } from "redux";
// Action Types
import {
  UPDATE_PENDING_CASES,
  UPDATE_CASES_RESET,
  /* updatePendingCases, */
} from "../../action-creators/caseCreators";
// Interfaces and Types
import { CaseReturnedFromDB } from "../../../constants/interfaces/case";

export interface CaseState {
  contents: CaseReturnedFromDB[];
}

const buildInitialState = (): CaseState => {
  const INITIAL_STATE: CaseState = {
    contents: [],
  };

  return INITIAL_STATE;
};

const INITIAL_STATE: CaseState = buildInitialState();

const reducer: Reducer<CaseState, Action> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PENDING_CASES:
      return {
        ...state,
        contents: (action as unknown as { payload: CaseReturnedFromDB[] })
          .payload,
      };

    case UPDATE_CASES_RESET:
      return buildInitialState();

    default:
      return state;
  }
};

export default reducer;
