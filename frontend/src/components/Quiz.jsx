import { useGetQuizBySectionKeyQuery } from "../slices/sectionsApiSlice";
import Question from "./Question";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Quiz = ({ user }) => {
	// const [quiz, setQuiz] = useState({});
	const quizScores = useSelector((state) => state.auth); //this should give us our quiz scores?
	//in section controller, create route post route for submitting test scores.
	//it will have to overwrite the existing test scores in the database

	const { sectionKey } = useParams();
	const {
		data: quiz,
		isLoading,
		error,
	} = useGetQuizBySectionKeyQuery(sectionKey);

	console.log(quiz, "inside quiz component");
	// const { questions } = quiz[0] ?? {};

	return (
		<div>
			<Question
				user={user}
				questions={quiz?.questions ?? []}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	);
};

export default Quiz;
