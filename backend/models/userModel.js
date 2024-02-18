import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const quizScoresSchema = new mongoose.Schema({
	//change to sectionKey: String when you re seed
	sectionKey: String,

	bestScore: Number, //calculate this in the controller. If client score is better than score retrieved from database (get user by id -> get section scores via sectionKey)

	//////////////////////////// need to re seed at some point !!!!!!!!!1
	scores: [Array], //averge based on quiz length, how to retieve quiz length?
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

	quizScores: {
		type: [Object],
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
