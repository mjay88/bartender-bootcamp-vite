import express from "express";
const router = express.Router();
// import { quizzes, quizzes } from "../data/quizzes.js";
// import { menuItems } from "../data/menuItems.js";
// import recursiveSearch from "../utils/recursiveSearch.js";
// import asyncHandler from "../middleware/asyncHandler.js";

import {
	getSections,
	getSectionByUrl,
	getQuizByKey,
} from "../controllers/sectionController.js";

// router.get(
// 	"/",
// 	asyncHandler(async (req, res) => {
// 		const sections = await Section.find({});
// 		res.json(sections);
// 	})
// );

router.route("/").get(getSections);
router.route("/:sectionId").get(getSectionByUrl);
router.route("/quiz/:sectionKey").get(getQuizByKey);

export default router;
