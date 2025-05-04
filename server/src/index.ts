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
import rateLimit from "express-rate-limit";
import helmet from "helmet";
//Routes
import userRoutes from "./routes/users";
import websitesOrAppsRoutes from "./routes/websitesOrApps";
import analyticsRoutes from "./routes/analytics";

// Server Configuration
const app = express();

const MONGO_URL = env.MONGO_URL;
const BACKEND_PORT = env.BACKEND_PORT;
const IS_DEV = env.IS_DEV;
const SESSION_SECRET = env.SESSION_SECRET;
const ALLOWED_ORIGINS = env.ALLOWED_ORIGINS.split(",");


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
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: IS_DEV === "TRUE" ? false : true,
      secure: IS_DEV === "TRUE" ? false : true,
      sameSite: "lax", // or "strict" if you want stricter CSRF protection
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_URL,
    }),
  })
);
app.use(helmet());

rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many attempts, please try again later.",
});

// Use Imported routes
app.use("/api/users", userRoutes);
app.use("/api/websites-or-apps", websitesOrAppsRoutes);
app.use("/api/analytics", analyticsRoutes);

// Allow credentials in CORS configuration
app.options("*", cors(corsOptions));

//Connect to DB
mongoose.connect(MONGO_URL).then(() => {
  const server = http.createServer(app);

  server.listen(BACKEND_PORT, () => {
    console.log(`Listening on port: ${BACKEND_PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
  process.exit(1);
});
