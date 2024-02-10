import mongoose from "mongoose";

// const ImageSchema = new mongoose.Schema({
// 	url: String,
// 	fileName: String,
// });

// const ContentSchema = new mongoose.Schema({
// 	content: String,
// });

const sectionSchema = new mongoose.Schema({
	title: String,
	url: String,
	key: String,
	images: [{ url: String, secure_url: String }],
	// content: [{ url: String }],
	//maybe just this one below is easier?
	content: [String],
	completed: { type: Boolean, default: false },
});

const Section = mongoose.model("Section", sectionSchema);

export default Section;
