import asyncHandler from "../middleware/asyncHandler.js";
import Section from "../models/sectionModel.js";

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
	console.log(section, "section in secitonRoutes");
	if (section) {
		return res.json(section[0]);
	} else {
		res.status(404);
		throw new Error("Section not found");
	}
});

export { getSections, getSectionByUrl };
