import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });
export const rootSlice = createApi({
	baseQuery,
	tagTypes: ["QuizScore", "User", "Section"],
	endpoints: (builder) => ({}),
});
