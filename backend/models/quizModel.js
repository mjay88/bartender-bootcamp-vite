import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
	// ref: Section,????
	title: String,
	url: String,
	questions: [String],
	answers: [String],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
