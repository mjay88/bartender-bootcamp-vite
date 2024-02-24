import React, { useEffect, useState, useRef } from "react";
import { Col, Row, Container, ListGroup, Button, Modal } from "react-bootstrap";
import { useUpdateQuizScoresMutation } from "../slices/usersSlice";
import Loader from "./Loader";
import Message from "./Message";
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPreviousAndNext } from "../utils/getPreviousAndNext";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../menuItems";
//need to disable handleClick once we have answered last question
const Question = ({ questions, isLoading, error, sectionKey }) => {
	//import an action to dispatch to the updateQuizScores from userSlice? also create global state for the user? upon login?
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
	const [show, setShow] = useState(false);
	const [userAnswers, setUserAnswers] = useState({ scores: [], correct: 0 });
	const { question, answers, correctAnswer } =
		questions[currentQuestionIdx] ?? {};
	const [updateScores] = useUpdateQuizScoresMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { userInfo } = useSelector((state) => state.auth);
	const currentQuizRecord = userInfo.quizScores.find(
		(quiz) => quiz.sectionKey === sectionKey
	);
	const currentBestScore =
		(currentQuizRecord.bestScore / currentQuizRecord.scores[0].length) * 100;

	function addToCorrect(selectedAnswerIdx, correctAnswer, userAnswers) {
		let newCorrectCount;
		if (selectedAnswerIdx === correctAnswer) {
			newCorrectCount = userAnswers.correct + 1;
		} else {
			newCorrectCount = userAnswers.correct;
		}
		return newCorrectCount;
	}
	function handleClick(selectedAnswerIdx) {
		//if question already answered, return
		if (userAnswers.scores[currentQuestionIdx]) return;
		setUserAnswers({
			scores: [...userAnswers.scores, selectedAnswerIdx],
			correct: addToCorrect(selectedAnswerIdx, correctAnswer, userAnswers),
		});
	}
	function handleNextClick() {
		setCurrentQuestionIdx((prevIdx) => prevIdx + 1);
	}

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	async function handleSubmitScores() {
		try {
			const res = await updateScores({
				userId: userInfo._id,
				sectionKey: sectionKey,
				userAnswers: userAnswers,
			}).unwrap();
			//then re run setCredentials like in userRegisterScreen?
			dispatch(setCredentials(res));
		} catch (error) {
			console.log(error);
		}
		setShow(true);
		//navigate to next section
		navigate(getPreviousAndNext(menuItems, `quiz/${sectionKey}`)[1].url);
	}
	console.log(
		getPreviousAndNext(menuItems, `quiz/${sectionKey}`)[1].url,
		"navigating to here"
	);
	function setStyles(
		userAnswers,
		correctAnswer,
		currentQuestionIdx,
		answerIdx
	) {
		let style = "";
		if (userAnswers?.scores[currentQuestionIdx] == null) return style;
		if (userAnswers?.scores[currentQuestionIdx] === answerIdx) {
			if (userAnswers?.scores[currentQuestionIdx] === correctAnswer) {
				style = " correct";
			} else {
				style = " incorrect";
			}
		}
		return style;
	}

	return (
		<>
			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="custom-modal"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						Quiz scores submitted succesfully!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<h3>
							Current Score:{" "}
							{Math.round((userAnswers.correct / questions?.length) * 100)}%
						</h3>
					</div>
					<div>
						<h3>Best Score: {currentBestScore ? currentBestScore : 0}%</h3>
					</div>
				</Modal.Body>
			</Modal>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					{error?.data?.message || error.error}
				</Message>
			) : (
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
							userAnswers.scores[currentQuestionIdx] != null ? (
								<Button onClick={handleSubmitScores} variant="primary">
									Submit Answers
								</Button>
							) : userAnswers.scores[currentQuestionIdx] == null ? (
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
			)}
		</>
	);
};

export default Question;

//to do

//seed data base with quiz info
// update frontend menuItems with quiz link?
//user authentication back and frontend before finish quiz
//finish routing and update redux slices for quiz
