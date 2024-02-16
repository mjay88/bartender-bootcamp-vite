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
