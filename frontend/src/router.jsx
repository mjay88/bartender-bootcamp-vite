import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Content from "./components/Content";
import Quiz from "./components/Quiz";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";
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
					{ path: "/edit-profile", element: <EditProfileScreen /> },
					{ path: "/profile", element: <UserProfileScreen /> },
				],
			},
			{ path: "/login", element: <LoginScreen /> },
			{ path: "/register", element: <RegistrationScreen /> },
		],
	},
	{ path: "landing-page", element: <LandingPage /> },
]);
