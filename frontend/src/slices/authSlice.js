import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInfo: localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		//login or register screen -> usersSlice login or register mutation sends client info to backend -> backend validates and saves user in db, sets jwt token -> then we send the response from post request to setCredentials via dispatch (dispatch is the bridge between actions and state) -> setCredentials puts authController responsse in state.
		setCredentials: (state, action) => {
			//once we hit our backend through the user apiSlice, we get our user info and send it here as the payload to the action
			state.userInfo = action.payload;
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		//logout local
		logout: (state, action) => {
			state.userInfo = null;
			localStorage.removeItem("userInfo");
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
