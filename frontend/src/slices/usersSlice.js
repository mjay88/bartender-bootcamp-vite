import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		//builder.mutation because where making a post request
		login: builder.mutation({
			query: (data) => ({
				//replaces regular fetch request, useEffect and useState we had on HomeScreen
				url: `${USERS_URL}/auth`,
				method: "POST",
				body: data,
			}),
		}),
		//register
		register: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}`,
				method: "POST",
				body: data,
			}),
		}),
		//logout server
		logout: builder.mutation({
			query: () => ({
				url: `${USERS_URL}/logout`,
				method: "POST",
			}),
		}),
		//update profile
		profile: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/profile`,
				method: "PUT",
				body: data,
			}),
		}),
		getUsers: builder.query({
			query: () => ({
				url: USERS_URL,
			}),
			providesTags: ["Users"], //makes sure data is not cached so we don't have to re load to see update
			keepUnusedDataFor: 5,
		}),
		deleteUser: builder.mutation({
			query: (userId) => ({
				url: `${USERS_URL}/${userId}`,
				method: "DELETE",
			}),
		}),
		getUserDetails: builder.query({
			query: (userId) => ({
				url: `${USERS_URL}/${userId}`,
			}),
			keepUnusedDataFor: 5,
		}),
		updateUser: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/${data.userId}`,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Users"],
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useProfileMutation,
	useGetUsersQuery,
	useDeleteUserMutation,
	useGetUserDetailsQuery,
	useUpdateUserMutation,
} = usersSlice;
