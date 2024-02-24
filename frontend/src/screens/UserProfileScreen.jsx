import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Row, Col, Container } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { set } from "mongoose";
const SECTIONS_LENGTH = 64;
const QUIZZES_LENGTH = 9;

const UserProfileScreen = () => {
	const [completedSections, setCompletedSections] = useState(0);
	const [completedQuizzes, setCompletedQuizzes] = useState(0);
	console.log(
		completedSections,
		"completed section before convert to percentage"
	);
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		const sections = userInfo?.completed;
		const finished = sections.reduce((complete, section) => {
			if (section.completed) {
				return (complete = complete + 1);
			}
			return complete;
		}, 0);
		setCompletedSections(Math.round((finished / SECTIONS_LENGTH) * 100));
		const quizzes = userInfo?.quizScores;
		setCompletedQuizzes(Math.round((quizzes.length / QUIZZES_LENGTH) * 100));
	}, [userInfo.completed, userInfo.quizScores]);
	return (
		<Container>
			<h1>Your Progress</h1>
			<Row className="m-3">
				<Col>
					<div>
						Completed Sections
						<ProgressBar
							striped
							variant="success"
							now={completedSections}
							label={`${completedSections}%`}
						/>
					</div>
				</Col>
			</Row>
			<Row className="m-3">
				<Col>
					<div>
						Completed Quizzes
						<ProgressBar
							striped
							variant="success"
							now={completedQuizzes}
							label={`${completedQuizzes}%`}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default UserProfileScreen;
