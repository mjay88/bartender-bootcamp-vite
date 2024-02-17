import express from "express";
const router = express.Router();
import {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUsers,
	getUserById,
	deleteUser,
	updateUser,
	updateQuizScores,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//route logic lives in userController.js
// router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/").post(registerUser).get(protect, getUsers);

router.post("/logout", logoutUser);
router.post("/auth", authUser);
router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);

router.route("/quiz").put(protect, updateQuizScores);
// router.route("/profile").get(getUserProfile).put(updateUserProfile);
// router
// 	.route("/:id")
// 	.delete(protect, admin, deleteUser)
// 	.get(protect, admin, getUserById)
// 	.put(protect, admin, updateUser);
router
	.route("/:id")
	.delete(protect, deleteUser)
	.get(protect, getUserById)
	.put(protect, updateUser);

export default router;
