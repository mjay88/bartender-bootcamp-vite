import React, { useEffect, useState } from "react";
import Question from "./Question";
import axios from "axios";
const Quiz = ({ user }) => {
	const [questions, setQuestions] = useState([]);
	// console.log(questions, "questions");
	useEffect(() => {
		const fetchContent = async () => {
			const { data } = await axios.get(`/quiz`);
			// console.log(data, "inside fetchContent");
			setQuestions(data);
		};

		fetchContent();
	}, []);

	return (
		<div>
			<Question user={user} questions={questions[0]} />
		</div>
	);
};

export default Quiz;
