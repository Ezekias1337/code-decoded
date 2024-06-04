interface Constants {
  [key: string]: any;
}

interface InitialState {
  messages?: Constants;
  errors?: Constants;
  loading?: Constants;
  contents?: Constants;
}

export const buildInitialState = (
  constants: string[],
  includeMessages: boolean = true,
  includeErrors: boolean = true,
  includeLoading: boolean = true,
  includeContents: boolean = true
): InitialState => {
  const initialState: InitialState = {};

  if (includeMessages) {
    initialState.messages = constants.reduce((retObj: Constants, constant: string) => {
      retObj[constant] = [];
      return retObj;
    }, {});
  }

  if (includeErrors) {
    initialState.errors = constants.reduce((retObj: Constants, constant: string) => {
      retObj[constant] = [];
      return retObj;
    }, {});
  }

  if (includeLoading) {
    initialState.loading = constants.reduce((retObj: Constants, constant: string) => {
      retObj[constant] = false;
      return retObj;
    }, {});
  }

  if (includeContents) {
    initialState.contents = constants.reduce((retObj: Constants, constant: string) => {
      retObj[constant] = [];
      return retObj;
    }, {});
  }

  return initialState;
};
