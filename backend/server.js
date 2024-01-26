import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { menuItems } from "./data/menuItems.js";
import recursiveSearch from "./utils/recursiveSearch.js";
const port = process.env.PORT || 5000;
const app = express();

// app.get("/", (req, res) => {
// 	res.send("API is running...");
// });

app.get("/", (req, res) => {
	res.json(menuItems);
});

app.get("/:sectionId", (req, res) => {
	const section = recursiveSearch(menuItems, req.params.sectionId);
	console.log(section, "section");
	res.json(section);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
