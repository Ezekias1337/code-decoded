export interface ReduxDefaultState {
  messages?: Record<string, string[]>;
  errors?: Record<string, string[]>;
  loading?: Record<string, boolean>;
  contents?: Record<string, string[]>;
}
