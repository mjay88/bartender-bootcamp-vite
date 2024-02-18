import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//authentication = login -> create jwt web token -> store it in an http only cookie -> send that cookie with every request after that and validate it with middleware (authMiddleWare)

//@desc Auth user & get token
//@route POST users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		generateToken(res, user._id);

		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			quizScores: user.quizScores,
		});
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});

//@desc Auth Register user
//@route POST users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}
	//add to database
	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		generateToken(res, user._id);

		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			quizScores: [],
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

//@desc logout user/clear cookie
//@route POST /api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
	res.cookie("jwt", "", {
		httpOnly: true,
		expires: new Date(0),
	});

	res.status(200).json({ message: "Logged out successfully" });
});

//@desc get user profile
//@route  GET /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			quizScores: user.quizScores,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

//@desc update user profile
//@route  PUT /api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (user) {
		//if name or email not updated us original
		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;

		if (req.body.password) {
			user.password = req.body.password;
		}
		const updatedUser = await user.save();

		res.status(200).json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			quizScores: updatedUser.quizScores,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

//@desc update user profile
//@route  PUT/POST? users/quiz
//@access Private
const updateQuizScores = asyncHandler(async (req, res) => {
	//this should be recieving and object like this
	//   {userId, sectionKey, userAnswers}
	// use userId to get user from db
	//update users quizScores
	//save user to db
	// { scores: [1 ,3 ,4, 6,], correct: 0 }

	// console.log(req, "req ins controller");
	try {
		const { sectionKey, userAnswers } = req.body;
		console.log(userAnswers.correct, "userAnswers.correct in controller");
		//user is made available via protect in authMiddleware.js
		const user = await User.findById(req.user._id);

		// Find the index of the quiz score to replace
		const scoreIndex = user.quizScores.findIndex(
			(score) => score.sectionKey === sectionKey
		);
		console.log(
			user.quizScores[scoreIndex],
			"should be what exists in db currently"
		);
		if (scoreIndex !== -1) {
			const newBestScore = determineBestScore(
				userAnswers.correct,
				user.quizScores[scoreIndex].bestScore
			);

			// const updatedScores = [
			// 	user.quizScores[scoreIndex].scores,
			// 	userAnswers.scores,
			// ];
			// console.log(updatedScores, "should be two arrays");
			// Update the existing quiz score
			// user.quizScores[scoreIndex].bestScore = newBestScore;
			// user.quizScores[scoreIndex].scores = updatedScores;
			user.quizScores[scoreIndex] = {
				sectionKey: sectionKey,
				bestScore: newBestScore,
				scores: [...user.quizScores[scoreIndex].scores, userAnswers.scores],
			};
		} else {
			// Create and push new quiz score if not found
			const newQuizScore = {
				sectionKey: sectionKey,
				bestScore: userAnswers.correct, // No need to compare, as this is the first score
				scores: [userAnswers.scores],
			};
			user.quizScores.push(newQuizScore);
		}

		function determineBestScore(clientScore, foundIndexScore) {
			let newScore;
			if (!foundIndexScore) return clientScore;
			if (!foundIndexScore || clientScore > foundIndexScore) {
				newScore = clientScore;
			} else {
				newScore = foundIndexScore;
			}
			return newScore;
		}

		// user.quizScores = [...user.quizScores, newQuizScores];
		const updatedUser = await user.save();
		res.status(200).json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			quizScores: updatedUser.quizScores,
		});
	} catch (error) {
		console.error(error); // Log the error for server-side debugging
		res.status(500).json({ message: "There was an error saving quiz scores." });
	}

	//send scores here from Question component, find the user in database, update the quiz scores with userAnswers
	//Question component -> passes data to state via dispatch/setCredentials in authSlice ->
});
//@desc get all users
//@route  GET /api/users
//@access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.status(200).json(users);
});

//@desc get user by id
//@route  GET /api/users/:id
//@access Private/Admin

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select("-password");
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

//@desc delete user
//@route  DELETE /api/users/:id
//@access Private/Admin

const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);

	if (user) {
		if (user.isAdmin) {
			res.status(400);
			throw new Error("Cannot delete admin user");
		}
		await User.deleteOne({ _id: user._id });
		res.status(200).json({ message: "User deleted successfully" });
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

//@desc update user
//@route  PUT /api/users/:id
//@access Private/Admin

const updateUser = asyncHandler(async (req, res) => {
	res.send("upadte user");
	// const user = await User.findById(req.params.id);
	// if (user) {
	// 	user.name = req.body.name || user.name;
	// 	user.email = req.body.email || user.email;
	// 	user.isAdmin = Boolean(req.body.isAdmin);

	// 	const updatedUser = await user.save();

	// 	res.status(200).json({
	// 		_id: updateUser._id,
	// 		name: updateUser.name,
	// 		email: updatedUser.email,
	// 		isAdmin: updatedUser.isAdmin,
	// 	});
	// } else {
	// 	res.status(404);
	// 	throw new Error("User not found");
	// }
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	updateQuizScores,
	getUsers,
	getUserById,
	deleteUser,
	updateUser,
};
