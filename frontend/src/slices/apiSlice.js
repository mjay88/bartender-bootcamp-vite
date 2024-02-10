import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //createApi instead of createSlice because this route/action will be dealing with asychronous code
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
//parent of quizSlice, userSlice
export const apiSlice = createApi({
	baseQuery,
	tagTypes: ["QuizScore", "User", "Section"],
	//we don't have to manuelly fetch our data, or deal with errors, the builder does it for us.
	endpoints: (builder) => ({}),
});
