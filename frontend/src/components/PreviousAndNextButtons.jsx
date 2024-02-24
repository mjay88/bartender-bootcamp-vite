import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import { getPreviousAndNext } from "../utils/getPreviousAndNext";
import { useState, useEffect } from "react";

//needs to mirror useParams
const PreviousAndNextButtons = ({ menuItems }) => {
	//useLayoutEffect?
	const [previous, setPrevious] = useState("");
	const [next, setNext] = useState("");
	const { sectionId, sectionKey } = useParams();

	useEffect(() => {
		if (sectionId) {
			setPrevious(getPreviousAndNext(menuItems, sectionId)[0]);
			setNext(getPreviousAndNext(menuItems, sectionId)[1]);
		}
		if (sectionKey) {
			setPrevious(getPreviousAndNext(menuItems, `quiz/${sectionKey}`)[0]);
			setNext(getPreviousAndNext(menuItems, `quiz/${sectionKey}`)[1]);
		}
	}, [sectionId, menuItems, sectionKey]);

	return (
		<>
			{sectionId && (
				<Pagination>
					{previous ? (
						<LinkContainer to={`sections/${previous.url}`}>
							<Pagination.Prev>{previous.title}</Pagination.Prev>
						</LinkContainer>
					) : null}
					{next ? (
						<LinkContainer to={`sections/${next.url}`}>
							<Pagination.Prev>{next.title}</Pagination.Prev>
						</LinkContainer>
					) : null}
				</Pagination>
			)}
			{sectionKey && (
				<Pagination>
					{previous ? (
						<LinkContainer to={`sections/${previous.url}`}>
							<Pagination.Prev>{previous.title}</Pagination.Prev>
						</LinkContainer>
					) : null}
					{next ? (
						<LinkContainer to={`sections/${next.url}`}>
							<Pagination.Prev>{next.title}</Pagination.Prev>
						</LinkContainer>
					) : null}
				</Pagination>
			)}
		</>
	);
};

export default PreviousAndNextButtons;
