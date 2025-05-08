// Library Imports
import { config } from "dotenv";
config();
import express from "express";
import session from "express-session";
import env from "./util/validateEnv";
import cors from "cors";
import http from "http";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { PrismaClient } from "@prisma/client";
import pgSession from "connect-pg-simple";

// Routes
import userRoutes from "./routes/users";
import websitesOrAppsRoutes from "./routes/websitesOrApps";
import analyticsRoutes from "./routes/analytics";

// Server Configuration
const app = express();
const PrismaStore = pgSession(session);

const POSTGRES_URL = env.POSTGRES_URL; // add this to your .env
const BACKEND_PORT = env.BACKEND_PORT;
const IS_DEV = env.IS_DEV;
const SESSION_SECRET = env.SESSION_SECRET;
const ALLOWED_ORIGINS = env.ALLOWED_ORIGINS.split(",");

// Prisma Client
const prisma = new PrismaClient();

// CORS Config
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
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
    store: new PrismaStore({
      conString: POSTGRES_URL,
      tableName: "session",
      createTableIfMissing: true,
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: IS_DEV === "TRUE" ? false : true,
      secure: IS_DEV === "TRUE" ? false : true,
      sameSite: "lax",
    },
  })
);
app.use(helmet());

// Rate Limiter
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many attempts, please try again later.",
  })
);

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/websites-or-apps", websitesOrAppsRoutes);
app.use("/api/analytics", analyticsRoutes);
app.options("*", cors(corsOptions));

// Connect to DB and start server
const main = async () => {
  try {
    await prisma.$connect();
    const server = http.createServer(app);

    server.listen(BACKEND_PORT, () => {
      console.log(`Listening on port: ${BACKEND_PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to PostgreSQL", err);
    process.exit(1);
  }
}

main();
