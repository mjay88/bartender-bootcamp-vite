import { http } from "msw";
import { setupServer } from "msw/node";
import { BASE_URL } from "../src/constants";

export const mockServer = setupServer();

export function addMockApiRouteHandler(type, path, cb) {
	mockServer.use(http[type](new URL(path, BASE_URL).href, cb));
}
