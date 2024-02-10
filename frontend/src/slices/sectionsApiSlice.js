import { SECTIONS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const sectionsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getSections: builder.query({
			query: () => ({
				url: SECTIONS_URL,
			}),
			keepUnusedDataFor: 5,
		}),
		getSectionByUrl: builder.query({
			query: (sectionUrl) => ({
				url: `${SECTIONS_URL}/${sectionUrl}`,
			}),
			keepUnusedDataFor: 5,
		}),
	}),
});

export const { useGetSectionsQuery, useGetSectionByUrlQuery } =
	sectionsApiSlice;
