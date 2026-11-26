import http from "node:http";
import app from "./app.js";
import { ENV } from "./config/env.config.js";

const port = ENV.PORT;

const httpServer = http.createServer(app);

const startServer = async () => {
  try {
    await connectDB();

    httpServer.on("error", (error) => {
      console.error("ERR: ", error);
      throw error;
    });

    httpServer.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error(`MONGODB Connection Failed!! - ${err}`);
  }
};

startServer();
