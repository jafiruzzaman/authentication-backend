import app from "./app/app.js"; // ensure you include .js if using ES modules
import { connectDB } from "./config/db.config.js";
import { env } from "./config/dotenv.config.js";

const start = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log("Database connected successfully");

    // Start server
    const PORT = env.port || 5252;
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(`Server failed to start: ${error.message}`);
  }
};

start();
