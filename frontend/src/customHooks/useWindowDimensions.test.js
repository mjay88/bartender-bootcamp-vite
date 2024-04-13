import { renderHook } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import useWindowDimensions from "./useWindowDimensions";

describe("#useWindowDimensions", () => {
	it("gets the width and height of the window from the component it is called in", () => {
		//since useWindowDimensions doesn't take any props we don't need all this but leaving it here for reference
		const { result } = renderHook(({ window }) => useWindowDimensions(), {
			initialProps: {
				window: {
					height: 500,
					width: 500,
				},
			},
		});
		console.log(result);
		expect(result.current.height).toBeGreaterThan(0);
		expect(result.current.width).toBeGreaterThan(0);
	});
});
