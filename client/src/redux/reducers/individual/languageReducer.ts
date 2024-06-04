// Library Imports
import { Action, Reducer } from "redux";
// Action Types
import {
  UPDATE_LANGUAGE,
  UPDATE_LANGUAGE_RESET,
  UpdateLanguageAction,
} from "../../action-creators/languageCreators";

export interface LanguageState {
  contents: Record<string, string>;
}

const buildInitialState = (): LanguageState => {
  const INITIAL_STATE: LanguageState = {
    contents: {
      languageChoice: "English",
    },
  };

  return INITIAL_STATE;
};

const INITIAL_STATE: LanguageState = buildInitialState();

const reducer: Reducer<LanguageState, Action> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        contents: {
          ...state.contents,
          languageChoice: (action as UpdateLanguageAction).payload,
        },
      };

    case UPDATE_LANGUAGE_RESET:
      return buildInitialState();

    default:
      return state;
  }
};

export default reducer;
