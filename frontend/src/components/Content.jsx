import React, { useCallback, useEffect, useState } from "react";
import { useGetSectionByUrlQuery } from "../slices/sectionsApiSlice";
import { useParams } from "react-router-dom";
// import { menuItems } from "../menuItems";
import Grid from "./Grid";
import axios from "axios";

export default function Content() {
	// const [content, setContent] = useState({});
	const { sectionId } = useParams();
	console.log(sectionId, "sectionId");
	const {
		data: content,
		isLoading,
		error,
	} = useGetSectionByUrlQuery(sectionId);

	// useEffect(() => {
	// 	const fetchContent = async () => {
	// 		const { data } = await axios.get(`/sections/${sectionId}`);
	// 		console.log(data, "inside fetchContent");
	// 		setContent(data);
	// 	};

	// 	fetchContent();
	// }, [sectionId]);

	console.log(content, "content");

	return (
		<div>
			Content for {sectionId}
			<>
				{isLoading ? (
					<h1>Loading...</h1>
				) : error ? (
					<div>{error?.data?.message || error.error}</div>
				) : (
					<Grid paragraphs={content.content} images={content.images} />
				)}
			</>
		</div>
	);
}
