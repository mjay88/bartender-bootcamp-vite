import asyncHandler from "../middleware/asyncHandler.js";
import Section from "../models/sectionModel.js";
import Quiz from "../models/quizModel.js";
import { quizzes } from "../data/quizzes.js";

//@desc Fetch all Sections
//@route GET/sections
//@access Public
const getSections = asyncHandler(async (req, res) => {
	const sections = await Section.find({});
	res.json(sections);
});

//@desc Fetch Section by url/param
//@route GET/sections/:sectionId
//@access Public
const getSectionByUrl = asyncHandler(async (req, res) => {
	// const section = recursiveSearch(menuItems, req.params.sectionId);
	const section = await Section.find({ url: req.params.sectionId });
	// console.log(section[0], "section in secitonRoutes");
	if (section) {
		// console.log(section[0], "controller");
		return res.json(section[0]);
	} else {
		res.status(404);
		throw new Error("Section not found");
	}
});

const getQuizByKey = asyncHandler(async (req, res) => {
	// const section = recursiveSearch(menuItems, req.params.sectionId);
	// const tests = quizzes;
	// const key = req.params.sectionKey;
	// const quiz = tests.find(({ sectionKey }) => sectionKey === key);
	const quiz = await Quiz.find({ sectionKey: req.params.sectionKey });
	if (quiz) {
		return res.json(quiz[0]);
	} else {
		res.status(404);
		throw new Error("Quiz not found");
	}
});

// const updateQuizScores = asyncHandler(async (req, res) => {
// 	//user data should already be on the response?
// 	console.log(req, "request inside post quiz scores");
// 	res.send("posting quiz scores");
// });

export { getSections, getSectionByUrl, getQuizByKey };
