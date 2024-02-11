import express from "express";
import dotenv from "dotenv";
dotenv.config();
// import { menuItems } from "./data/menuItems.js";
import { quizzes } from "./data/quizzes.js";
import connectDB from "./config/db.js";
// import recursiveSearch from "./utils/recursiveSearch.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import sectionRoutes from "./routes/sectionRoutes.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.use("/sections", sectionRoutes);

app.get("/quiz", (req, res) => {
	const quiz = quizzes;
	console.log(quiz, "section");
	res.json(quiz);
});

//use errorMiddleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
