import { useGetSectionByUrlQuery } from "../slices/sectionsApiSlice";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";
import Grid from "./Grid";
import CompletedCheckbox from "./CompletedCheckbox";

export default function Content() {
	const { sectionId } = useParams();
	console.log(sectionId, "sectionId");
	const {
		data: content,
		isLoading,
		error,
	} = useGetSectionByUrlQuery(sectionId);

	// console.log(content, "content");

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
