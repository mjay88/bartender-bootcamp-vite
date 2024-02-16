import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Content from "./components/Content";
import Quiz from "./components/Quiz";
import LoginScreen from "./screens/LoginScreen";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>Error, unfortunately that path leads to no where...</h1>,
		children: [
			{ path: "sections/:sectionId", element: <Content /> },
			{ path: "sections/quiz/:sectionKey", element: <Quiz /> },
			{ path: "/login", element: <LoginScreen /> },
		],
	},
]);
