import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const quizScoresSchema = new mongoose.Schema({
	//change to sectionKey: String when you re seed
	section: String,
	url: String,
	correct: [Number], //get from quiz using sectionKey?
	//change to userScores ???
	incorrect: [Number],
	// attempted: Number, ???
	// highestScore: Number, ??
	//////////////////////////// need to re seed at some point !!!!!!!!!1
	scores: [Number], //averge based on quiz length, how to retieve quiz length?
	//before we post quiz data to database we will need to calculate the score in the quizScore controller or user controller
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
		type: [quizScoresSchema],
	},
});

//validate password with bcrypt
userSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//middleware that runs before we save, hashes the password
userSchema.pre("save", async function (next) {
	//if we aren't changeing the password run next middleware
	if (!this.isModified("password")) {
		next();
	}
	//if a new password, hash the password we get from the body
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
const QuizScores = mongoose.model("QuizScores", quizScoresSchema);

export default User;
export { QuizScores };
