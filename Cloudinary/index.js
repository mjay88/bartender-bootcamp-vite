import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: "../.env" }); //might cause issues when we configure variables when we deploy
// console.log(process.env.CLOUDINARY_CLOUD_NAME);
//set the config on our cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
	secure: true,
});

//we just want the path
// cloudinary.api.resources(
// 	{
// 		type: "upload",
// 		prefix: "bartenderBootCamp/vodka", // add your folder
// 	},
// 	function (error, result) {
// 		console.log(result, error);
// 	}
// );

export default cloudinary; //then use cloudinary.api.resources in seed file?
