import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Content from "./components/Content";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>Error, unfortunately that path leads to no where...</h1>,
		children: [{ path: "/:sectionId", element: <Content /> }],
	},
]);
