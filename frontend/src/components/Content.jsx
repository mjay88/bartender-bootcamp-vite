import { useGetSectionByUrlQuery } from "../slices/sectionsApiSlice";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import Grid from "./Grid";
import CompletedCheckbox from "./CompletedCheckbox";
import { useEffect, useState } from "react";

export default function Content() {
	const [data, setData] = useState({});
	// console.log(data, "data");
	// useEffect(() => {
	// 	const fetchStuff = async () => {
	// 		const res = await fetch(
	// 			"http://localhost:5000/sections/history-of-whiskey"
	// 		);
	// 		const data = await res.json();
	// 		setData(data);
	// 	};
	// 	fetchStuff();
	// }, []);
	const { sectionId } = useParams();
	console.log(sectionId, "sectionId");
	const {
		data: content,
		isLoading,
		error,
	} = useGetSectionByUrlQuery(sectionId);

	console.log(content, "content");
	console.log(error, "error from sueGetSectionBuURlQuery");
	return (
		<div>
			Content for {sectionId}
			<>
				{isLoading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">
						{error?.data?.message || error.error}
					</Message>
				) : (
					<Grid paragraphs={content.content} images={content.images} />
				)}
			</>
			<CompletedCheckbox sectionIdentifier={sectionId} />
		</div>
	);
}
