// Library Imports
import { configureStore } from "@reduxjs/toolkit";
// Redux
import { rootReducer } from "./reducers/allReducers";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
