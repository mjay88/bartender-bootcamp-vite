import React, { useEffect, useState, useRef } from "react";
import { Col, Row, Container, ListGroup, Button } from "react-bootstrap";

const Question = ({ user, questions }) => {
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	console.log(questions, "questions coming from Quiz");
	const { question, answers, correctAnswer } =
		questions[currentQuestionIdx] ?? {};
	// console.log(checkRef);
	console.log(question, answers, "quiz inside Question Component");

	function handleClick(selectedAnswerIdx) {
		setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswerIdx]);
		//move this to next button?
		// setCurrentQuestionIdx((prevIdx) => prevIdx + 1);
	}
	function handleNextClick() {
		setCurrentQuestionIdx((prevIdx) => prevIdx + 1);
	}
	function setStyles(
		userAnswers,
		correctAnswer,
		currentQuestionIdx,
		answerIdx
	) {
		let style = "";
		if (userAnswers[currentQuestionIdx] == null) return style;
		if (userAnswers[currentQuestionIdx] === answerIdx) {
			if (userAnswers[currentQuestionIdx] === correctAnswer) {
				style = " correct";
			} else {
				style = " incorrect";
			}
		}
		return style;
	}

	return (
		<Container
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Row>
				<Col>
					<h1>{question}</h1>
					<ListGroup>
						{answers?.map((answer, answerIdx) => (
							<ListGroup.Item
								onClick={() => handleClick(answerIdx)}
								className={`answer${setStyles(
									userAnswers,
									correctAnswer,
									currentQuestionIdx,
									answerIdx
								)} p-3`}
								key={answerIdx}
							>
								{answer}
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
				<ListGroup.Item className="mt-3 d-flex flex-row-reverse">
					{currentQuestionIdx === questions?.length - 1 &&
					userAnswers[currentQuestionIdx] != null ? (
						<Button variant="primary">Submit Answers</Button>
					) : userAnswers[currentQuestionIdx] == null ? (
						<Button disabled={true} variant="primary">
							Next
						</Button>
					) : (
						<Button onClick={handleNextClick} variant="primary">
							Next
						</Button>
					)}
				</ListGroup.Item>
			</Row>
		</Container>
	);
};

export default Question;

//to do

//seed data base with quiz info
// update frontend menuItems with quiz link?
//user authentication back and frontend before finish quiz
//finish routing and update redux slices for quiz
