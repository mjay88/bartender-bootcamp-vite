import express from "express";
const router = express.Router();
// import { menuItems } from "../data/menuItems.js";
// import recursiveSearch from "../utils/recursiveSearch.js";
// import asyncHandler from "../middleware/asyncHandler.js";
import Section from "../models/sectionModel.js";
import {
	getSections,
	getSectionByUrl,
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

// router.get(
// 	"/:sectionId",
// 	asyncHandler(async (req, res) => {
// 		// const section = recursiveSearch(menuItems, req.params.sectionId);
// 		const section = await Section.find({ url: req.params.sectionId });
// 		console.log(section, "section in secitonRoutes");
// 		if (section) {
// 			return res.json(section[0]);
// 		} else {
// 			res.status(404);
// 			throw new Error("Section not found");
// 		}
// 	})
// );

export default router;
