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
	//should utils be a custom hook?
	//should I be using a loader for routes?
	//do I need custom scss file, can I just put it into, index.css
	//user should always be directed to landing page if no user info found?, need to research cookies?
	//navigate to where user left off?

	{
		path: "/",
		element: <App />,
		errorElement: <h1>Error, unfortunately that path leads to no where...</h1>,
		children: [
			{
				path: "",
				element: <PrivateRoute />,
				children: [
					//should I be using a loader in conjunction with redux to provide data to each route?
					{ path: "/sections/:sectionId", element: <Content /> },
					{ path: "/sections/quiz/:sectionKey", element: <Quiz /> },
					{ path: "/edit-profile", element: <EditProfileScreen /> },
					{ path: "/profile", element: <UserProfileScreen /> },
				],
			},
		],
	},
	//need to show landing page if no user data found from userSlice?
	{ path: "/login", element: <LoginScreen /> },
	{ path: "/landing-page", element: <LandingPage /> },
	{ path: "/register", element: <RegistrationScreen /> },
]);
