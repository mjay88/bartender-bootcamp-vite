import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach, beforeEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { mockServer } from "./mockServer";

expect.extend(matchers);

beforeAll(() => {
	mockServer.listen({ onUnhandledRequest: "error" }); //if we make an unmocked api request, and we didn't manuelly fake it, throw an error so we know about it
});

afterEach(() => {
	cleanup();
	//restart the mocks every time we run a test
	mockServer.resetHandlers();
});

afterAll(() => {
	mockServer.close();
});
