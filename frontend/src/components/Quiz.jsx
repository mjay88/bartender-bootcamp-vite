import { useGetQuizBySectionKeyQuery } from "../slices/sectionsApiSlice";
import Question from "./Question";
import { useParams } from "react-router-dom";

const Quiz = ({ user }) => {
	// const [quiz, setQuiz] = useState({});
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
