import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "./assets/styles/custom.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);

reportWebVitals();
