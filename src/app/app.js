import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// create express server
const app = express();

// cors configuration
app.use(
  cors({
    allowedHeaders: [""],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    origin: process.env.FRONTEND_DOMAIN,
    credentials: true,
  }),
);

// cookie-parser configuration
app.use(cookieParser());

// routes

// globalErrorHandler

// export app
export default app;
