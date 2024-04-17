import { render } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../src/router";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

export function renderRoute(route = "/") {
	window.history.pushState({}, "Test Page", route);
	const initialState = { getState: () => [] };
	const mockStore = configureStore([]);
	return render(
		<Provider store={mockStore}>
			<RouterProvider router={createBrowserRouter(routes)} />
		</Provider>
	);
}
