const notFound = (req, res, next) => {
	console.log("firing notFound");
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const errorHandler = (err, req, res, next) => {
	//if an error but statusCode is still 200

	let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;
	console.log(message, "firing error handler");
	//check for mongoose bad ObjectId
	if (err.name === "CastError" && err.kind === "ObjectId") {
		message = `Resource not found`;
		statusCode = 404;
	}

	res.status(statusCode).json({
		message,
		stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
	});
};

export { notFound, errorHandler };
