import { useGetQuizBySectionKeyQuery } from "../slices/sectionsApiSlice";
import CompletedCheckbox from "./CompletedCheckbox";
import Question from "./Question";
import { useParams } from "react-router-dom";

const Quiz = () => {
	const { sectionKey } = useParams();
	console.log(sectionKey, "sectionKey in Quiz");
	const {
		data: quiz,
		isLoading,
		error,
	} = useGetQuizBySectionKeyQuery(sectionKey);

	return (
		<div>
			<Question
				questions={quiz?.questions ?? []}
				isLoading={isLoading}
				error={error}
				sectionKey={sectionKey}
			/>
			<CompletedCheckbox sectionIdentifier={sectionKey} />
		</div>
	);
};

export default Quiz;
