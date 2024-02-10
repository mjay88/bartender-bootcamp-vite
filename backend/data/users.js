import bcrypt from "bcryptjs";

const users = [
	{
		name: "Admin User",
		email: "admin@email.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Mr Bug",
		email: "bug@email.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: false,
	},
	{
		name: "Howl the Owl",
		email: "howl@email.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: false,
	},
];

export default users;
