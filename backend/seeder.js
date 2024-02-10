import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import { menuItems } from "./data/menuItems.js";
import User from "./models/userModel.js";
import Section from "./models/sectionModel.js";
import connectDB from "./config/db.js";
import cloudinary from "../Cloudinary/index.js";
// import { v2 as cloudinary } from "cloudinary";

import recursiveFlatten from "./utils/recursiveFlatten.js";
// dotenv.config({ path: "../.env" }); //might cause issues when we configure variables when we deploy
dotenv.config();

// console.log(
// 	cloudinary.api
// 		.resources(
// 			{
// 				type: "upload",
// 				prefix: "bartenderBootCamp/vodka", // add your folder
// 			},
// 			function (error, result) {
// 				// console.log("images=", result, error);
// 			}
// 		)
// 		.then((result) => console.log(result, "result.resources"))
// );

connectDB();

const importData = async () => {
	cloudinary.config({
		cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
		// cloud_name: "dqlkngbnx",
		api_key: process.env.CLOUDINARY_KEY,
		// api_key: "935779924135472",
		api_secret: process.env.CLOUDINARY_SECRET,
		// api_secret: "I7Nx8jA1gG3Ey1P7cZC0vZh7z1A",
		secure: true,
	});

	try {
		//clear the data base
		await User.deleteMany();
		await Section.deleteMany();

		const createdUsers = await User.insertMany(users);

		const sections = recursiveFlatten(menuItems);
		// console.log(sections, "sections");
		const cloudinaryImagesResponse = sections.map(async (section) => {
			return cloudinary.api
				.resources(
					{
						type: "upload",
						prefix: `bartenderBootCamp/${section.key}`, // add your folder
					},
					function (error, result) {
						console.log(result, error);
					}
				)
				.then((result) => {
					return {
						...section,
						images: result.resources.map((image) => {
							return { url: image.url, secure: image.secure_url };
						}),
					};
				})
				.catch((error) => {
					console.error("error fetching images from cloudinary", error);
					return { ...section, images: [] };
				});
		});
		const sectionsWithCloudinaryImages = await Promise.all(
			cloudinaryImagesResponse
		);

		console.log(sectionsWithCloudinaryImages[0], "sections with images");
		await Section.insertMany(sectionsWithCloudinaryImages);
		console.log("Data Imported".green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};
// importData();

const destroyData = async () => {
	try {
		await Section.deleteMany();
		await User.deleteMany();

		console.log("Data Destroyed!".red.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

// if (process.argv[2] === "-d") {
// 	destroyData();
// } else {
// 	importData();
// }
