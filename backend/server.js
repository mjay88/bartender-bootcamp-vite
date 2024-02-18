import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
// import { menuItems } from "./data/menuItems.js";
// import { quizzes } from "./data/quizzes.js";
import connectDB from "./config/db.js";
// import recursiveSearch from "./utils/recursiveSearch.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware. Allows to access cookies
app.use(cookieParser());

app.get("/", (req, res) => {
	res.send("API is running...");
});

// app.get("sections/quiz/:sectionKey", (req, res) => {
// 	// console.log(req.params.sectionKey, "section key");
// 	// console.log(quizzes, "quizzes");
// 	// const section = quizzes.find(
// 	// 	({ quiz }) => (quiz.sectionKey = req.params.sectionKey)
// 	// );
// 	// const { quiz } = section;
// 	// // const key = req.params.sectionKey;
// 	// res.json(quiz);
// 	const key = req.params.sectionKey;
// 	res.send(key);
// });
app.use("/sections", sectionRoutes);
app.use("/users", userRoutes);

//this isn't returning the right quiz, only the vodka quiz?????????????????
//quizzes .find not working?
// app.get("/quiz/:sectionKey", (req, res) => {
// 	console.log(req.params.sectionKey, "req.params 35");
// 	const section = quizzes.find(
// 		({ quiz }) => (quiz.sectionKey = req.params.sectionKey)
// 	);
// 	console.log(section, "section");
// 	const { quiz } = section;
// 	console.log(quiz, "actual quiz*************************");
// 	res.json(quiz);
// });

// `quiz/${sectionKey}`

//use errorMiddleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
