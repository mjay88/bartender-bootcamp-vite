import { it, describe, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import RegistrationScreen from "./RegistrationScreen.jsx";
import FormContainer from "../components/FormContainer";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { useRegisterMutation } from "../slices/usersSlice";
import { setCredentials } from "../slices/authSlice";

vi.mock("../slices/usersSlice", () => ({
	useRegisterMutation: vi.fn(),
}));

vi.mock("../slices/authSlice", () => ({
	setCredentials: vi.fn(),
}));
//need a beforeEach here that mocks redux
describe("Form Screen", () => {
	const initialState = {
		auth: {
			userInfo: null,
		},
		userRegister: {
			loading: false,
			error: null,
			userInfo: null,
		},
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	};
	const mockStore = configureStore();
	let store;
	it("should call onsubmit when the form is valid with the correct data", async () => {
		store = mockStore({ state: null });
		useRegisterMutation.mockReturnValue([vi.fn(), { isLoading: false }]);

		render(
			<Provider store={store}>
				<RouterProvider>
					<RegistrationScreen />
				</RouterProvider>
			</Provider>
		);
		screen.debug();

		const name = "test123";
		const email = "test123@email.com";
		const password = "Abc123$";
		const confirmPassword = "Abc123$";

		await waitFor(() => {
			const nameInput = screen.getByTestId("name");
			const emailInput = screen.getByTestId("email");
			const passwordInput = screen.getByTestId("password");
			const confirmPasswordInput = screen.getByTestId("confirmPassword");

			userEvent.type(nameInput, name);
			userEvent.type(emailInput, email);
			userEvent.type(passwordInput, password);
			userEvent.type(confirmPasswordInput, confirmPassword);
		});
		const form = screen.getByTestId("form");
		userEvent.submit(form);
		expect(useRegisterMutation).toHaveBeenCalledWith({
			name,
			email,
			password,
		});
		expect(setCredentials).toHaveBeenCalled();
	});
});
