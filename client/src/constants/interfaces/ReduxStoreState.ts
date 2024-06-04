import { LanguageState } from "../../redux/reducers/individual/languageReducer";
import { CaseState } from "../../redux/reducers/individual/caseReducer";
import { UPDATE_LANGUAGE } from "../../redux/action-creators/languageCreators";
import { UPDATE_PENDING_CASES } from "../../redux/action-creators/caseCreators";

export interface ReduxStoreState {
  language: LanguageState & {
    [key in typeof UPDATE_LANGUAGE]?: Record<string, string>;
  };
  cases: CaseState & {
    [key in typeof UPDATE_PENDING_CASES]?: Record<string, string>;
  };
}
