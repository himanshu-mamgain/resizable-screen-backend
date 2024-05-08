import express from "express";
import "dotenv/config";
import cors from "cors";
import dataRoutes from "./routes/dataRoutes";
import { connectDatabase } from "./services/database.service";

const app = express();

app.use(cors());
app.use(express.json());

// database setup
connectDatabase();

// router setup
dataRoutes(app.use(express.Router()));

const port = process.env.port || process.env.PORT || 3000;

app.listen(port, () => {
  console.info(`Server is listening to port: ${port}`);
});
