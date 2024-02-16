import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";
//authentication = login -> create jwt web token -> store it in an http only cookie -> send that cookie with every request after that and validate it with middleware (authMiddleWare)
//Protect routes
const protect = asyncHandler(async (req, res, next) => {
	let token;

	//read the jwt from the cookie
	token = req.cookies.jwt;

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await User.findById(decoded.userId).select("-password"); //add the user to the req so we will be able to access it on all routes but subtract the password
			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error("Not authorized, token failed");
		}
	} else {
		res.status(401);
		throw new Error("Not authorized, no token");
	}
});

export { protect };