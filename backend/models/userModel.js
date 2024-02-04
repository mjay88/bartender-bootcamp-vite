import mongoose from "mongoose";

const QuizScores = new mongoose.Schema({
	section: String,
	url: String,
	correct: [Number],
	incorrect: [Number],
	// attempted: Number, ???
	// highestScore: Number, ???
});

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},

	testScores: {
		type: [Number],
	},

	completed: {
		type: [String],
	},

	quizScores: {
		type: [QuizScores],
	},
});

const User = mongoose.model("User", userSchema);

export default User;
