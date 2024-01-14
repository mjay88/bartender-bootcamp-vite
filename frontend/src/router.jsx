import { createBrowserRouter } from "react-router-dom";
import App from "./App";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/vodka", element: <h1>Vodka</h1> },
			{ path: "/whiskey", element: <h1>Whiskey</h1> },
		],
	},
]);
