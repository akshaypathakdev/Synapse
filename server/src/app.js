import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";
import { HTTP_STATUS } from "./constants/constants.js";
import { ENV } from "./config/env.config.js";

const app = express();

app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
    maxAge: 600,
  })
);

app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/health", (req, res) => {
  //console.log("Health check is called!")
  res.status(HTTP_STATUS.OK).json({
    status: "OK",
    service: "Synapse API",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health/cron", (req, res) => {
  console.log("/health/cron is called!");
  res.status(HTTP_STATUS.OK).json({
    status: "OK",
    service: "Synapse API",
    timestamp: new Date().toISOString(),
  });
});

app.use(errorHandler);

export { app };
