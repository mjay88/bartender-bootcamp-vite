import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Content from "./components/Content";
import Quiz from "./components/Quiz";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>Error, unfortunately that path leads to no where...</h1>,
		children: [
			{
				path: "",
				element: <PrivateRoute />,
				children: [
					{ path: "sections/:sectionId", element: <Content /> },
					{ path: "sections/quiz/:sectionKey", element: <Quiz /> },
					{ path: "/profile", element: <ProfileScreen /> },
				],
			},
			{ path: "/login", element: <LoginScreen /> },

			{ path: "/register", element: <RegistrationScreen /> },
		],
	},
]);
