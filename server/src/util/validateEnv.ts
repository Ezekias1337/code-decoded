import { cleanEnv } from "envalid";
import { port, str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
  POSTGRES_URL: str(),
  BACKEND_PORT: port(),
  FRONTEND_PORT: port(),
  ORIGIN_URL_BASE: str(),
  SESSION_SECRET: str(),
  EMAIL_KEY: str(),
  IS_DEV: str(),
  ALLOWED_ORIGINS: str(),
});
