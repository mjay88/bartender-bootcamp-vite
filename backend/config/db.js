import mongoose from "mongoose";
//this file gets called at the beginning of our application to connect
//needs to be asyncronous because an methods we use whether from a mongoose model or from mongoose itself is going to return a promise.
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
