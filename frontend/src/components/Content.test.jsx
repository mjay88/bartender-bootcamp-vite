import { describe, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderRoute } from "../../test-setup/renderRoute";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import { HttpResponse, http } from "msw";
import { BASE_URL } from "../constants";
import {
	mockServer,
	addMockApiRouteHandler,
} from "../../test-setup/mockServer";

describe("Content page", () => {
	it("works", async () => {
		addMockApiRouteHandler(
			"get",
			"/sections/history-of-vodka",
			({ request }) => {
				return HttpResponse.json([
					{
						title: "History of Vodka",
						url: "history-of-vodka",
						key: "vodka",
						images: ["/images/vodka/avinash-kumar-OvUAL6Vx3uY-unsplash.jpg"],
						content: [
							"The creation of vodka traces back to the 9th century in Russia and the 8th century in Poland. Initially used for medicinal purposes, it gradually gained popularity as a beverage.",
							"By the 14th century, vodka established itself as a national drink in Russia and Poland. The 18th century saw the establishment of state vodka monopolies in Russia, enhancing its quality and production standards. Post World War II, vodka's popularity soared globally, especially in America.",
						],
					},
				]);
			}
		);

		renderRoute("/sections/history-of-vodka");
		screen.debug();
	});
});
