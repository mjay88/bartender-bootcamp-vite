import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SideNav from "./SideNav";
import menuItems from "../menuItems";
import { Provider } from "react-redux";

it("should render the SideNav", () => {
	render(
		<Provider>
			<SideNav menuItems={menuItems} />
		</Provider>
	);
	screen.debug();
});
