import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// // Serve static files from the React app
// app.use(express.static(path.resolve(__dirname, "..", "frontend")));

// // The "catchall" handler: for any request that doesn't

// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "..", "frontend", "index.html"));
// });
// // match one above, send back React's index.html file.

//Body parser middleware

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Cookie parser middleware. Allows to access cookies
app.use(cookieParser());

// app.get("/", (req, res) => {
// 	res.send("API is running...");
// });

app.use("/sections", sectionRoutes);
app.use("/users", userRoutes);
//use errorMiddleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
