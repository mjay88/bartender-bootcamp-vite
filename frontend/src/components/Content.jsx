import { useGetSectionByUrlQuery } from "../slices/sectionsApiSlice";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import Grid from "./Grid";
import CompletedCheckbox from "./CompletedCheckbox";
import { useEffect, useState } from "react";
import { SECTIONS_URL } from "../constants";

export default function Content() {
	// const [data, setData] = useState({});
	// console.log(data, "data in content");
	const { sectionId } = useParams();
	console.log(sectionId, "sectionId");
	console.log(SECTIONS_URL, "sections url");
	console.log(`${SECTIONS_URL}/${sectionId}`);
	const {
		data: content,
		isLoading,
		error,
	} = useGetSectionByUrlQuery(sectionId);
	// useEffect(() => {
	// 	const fetchStuff = async () => {
	// 		const res = await fetch(`${SECTIONS_URL}/${sectionId}`);
	// 		const data = await res.json();
	// 		setData(data);
	// 	};
	// 	fetchStuff();
	// }, []);

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
