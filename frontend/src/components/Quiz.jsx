import { useGetQuizBySectionKeyQuery } from "../slices/sectionsApiSlice";
import CompletedCheckbox from "./CompletedCheckbox";
import Question from "./Question";
import { useParams } from "react-router-dom";

const Quiz = () => {
	// const [quiz, setQuiz] = useState({});
	// const user = useSelector((state) => state.auth); //this should give us our quiz scores?
	//in section controller, create route post route for submitting test scores.
	//it will have to overwrite the existing test scores in the database
	// console.log(user, "user in quiz component");
	// console.log(useParams(), "useParams Quiz.jsx");
	const { sectionKey } = useParams();
	console.log(sectionKey, "sectionKey in Quiz");
	const {
		data: quiz,
		isLoading,
		error,
	} = useGetQuizBySectionKeyQuery(sectionKey);

	// console.log(quiz, "inside quiz component");
	// const { questions } = quiz[0] ?? {};

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
