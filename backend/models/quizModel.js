import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
	// ref: Section,????
	sectionKey: String,
	questions: [{ question: String, answers: [String], correctAnswer: Number }],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
