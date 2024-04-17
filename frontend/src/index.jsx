import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "./assets/styles/custom.scss";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.js";
import { routes } from "./router.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={createBrowserRouter(routes)}>
				<App />
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
