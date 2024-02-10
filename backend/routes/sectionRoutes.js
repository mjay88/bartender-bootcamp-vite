import express from "express";
const router = express.Router();
import { menuItems } from "../data/menuItems.js";
import recursiveSearch from "../utils/recursiveSearch.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Section from "../models/sectionModel.js";

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const sections = await Section.find({});
		res.json(sections);
	})
);

router.get(
	"/:sectionId",
	asyncHandler(async (req, res) => {
		// const section = recursiveSearch(menuItems, req.params.sectionId);
		const section = await Section.find({ url: req.params.sectionId });
		console.log(section, "section in secitonRoutes");
		if (section) {
			return res.json(section[0]);
		}
		res.status(404).json({ message: "section not found" });
	})
);

export default router;
