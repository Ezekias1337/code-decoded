// Library Imports
import { config } from "dotenv";
config();
import express from "express";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import cors from "cors";
import http from "http";
// Function Imports
import { generateOriginUrl } from "../../shared/helpers/generateOriginUrl";
//Routes
import userRoutes from "./routes/users";
import websitesOrAppsRoutes from "./routes/websitesOrApps";
import analyticsRoutes from "./routes/analytics";

// Server Configuration
const app = express();

const MONGO_URL = env.MONGO_URL;
const BACKEND_PORT = env.BACKEND_PORT;
/* const FRONTEND_PORT = env.FRONTEND_PORT;
const ORIGIN_URL_BASE = env.ORIGIN_URL_BASE; */
const SESSION_SECRET = env.SESSION_SECRET;
//const IS_DEV = env.IS_DEV;
const ALLOWED_ORIGINS = env.ALLOWED_ORIGINS.split(",");

/* const ORIGIN_URL = generateOriginUrl(
  ORIGIN_URL_BASE,
  FRONTEND_PORT.toString(),
  IS_DEV
); */

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS error: Origin '${origin}' not allowed`));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000 * 7,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_URL,
    }),
  })
);

// Use Imported routes
app.use("/api/users", userRoutes);
app.use("/api/websites-or-apps", websitesOrAppsRoutes);
app.use("/api/analytics", analyticsRoutes);

// Allow credentials in CORS configuration
app.options("*", cors(corsOptions));

//Connect to DB
const database = mongoose.connect(MONGO_URL).then(() => {
  const server = http.createServer(app);

  server.listen(BACKEND_PORT, () => {
    console.log(`Listening on port: ${BACKEND_PORT}`);
  });
});
