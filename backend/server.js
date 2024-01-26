import express from "express";
import { menuItems } from "./data/menuItems.js";
import recursiveSearch from "./utils/recursiveSearch.js";

const port = 5000;
const app = express();

// app.get("/", (req, res) => {
// 	res.send("API is running...");
// });

app.get("/", (req, res) => {
	res.json(menuItems);
});

app.get("/:sectionId", (req, res) => {
	const section = recursiveSearch(menuItems, req.params.sectionId);
	res.json(section);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
