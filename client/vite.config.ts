/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import { resolve } from "path";

dotenv.config({ path: resolve(__dirname, ".env") });

const VITE_FRONTEND_PORT_COERCED_TO_NUMBER: number = Number(
  process.env.VITE_FRONTEND_PORT
);

const configObject = {
  plugins: [react()],
  base: process.env.VITE_ROUTING_URL_BASE,
  server: {
    port: VITE_FRONTEND_PORT_COERCED_TO_NUMBER,
    host: "0.0.0.0",
  },
};

export default defineConfig(configObject);
