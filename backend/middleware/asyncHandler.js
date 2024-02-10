//resolves promise, if it resolves its going to call next and run the next piece of middleware
const asyncHandler = (fn) => (req, res, next) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
