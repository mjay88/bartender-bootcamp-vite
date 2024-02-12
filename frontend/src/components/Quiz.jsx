import React, { useEffect, useState } from "react";
import { useGetQuizBySectionKeyQuery } from "../slices/sectionsApiSlice";
import Question from "./Question";
import axios from "axios";
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
	const { questions } = quiz[0] ?? {};
	// console.log(questions, "QUESTIONS DESTRUCTURED FROM QUIZ IN QUIZ COMPONENT");
	// console.log(questions, "questions line 11*************************");
	// console.log(sectionKey, "SECTION KEY INSIDE QUIZ COMPONENT*****************");
	// useEffect(() => {
	// 	// console.log("firing!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	// 	const fetchContent = async () => {
	// 		const { data } = await axios.get(`/sections/quiz/${sectionKey}`);
	// 		// console.log(data, "inside fetchContent");
	// 		setQuiz(data);
	// 	};

	// 	fetchContent();
	// }, [sectionKey]);

	return (
		<div>
			<Question user={user} questions={questions ?? []} />
		</div>
	);
};

export default Quiz;
