import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
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

	console.log(sectionId, "sectionId from PreviousAndNextButton.jsx");

	return (
		<>
			{sectionId && (
				<Pagination>
					{previous ? (
						<Pagination.Prev>
							<Link to={`sections/${previous.url}`}>{previous.title}</Link>
						</Pagination.Prev>
					) : null}
					{next ? (
						<Pagination.Prev>
							<Link to={`sections/${next.url}`}>{next.title}</Link>
						</Pagination.Prev>
					) : null}
				</Pagination>
			)}
			{sectionKey && (
				<Pagination>
					{previous ? (
						<Pagination.Prev>
							<Link to={`sections/${previous.url}`}>{previous.title}</Link>
						</Pagination.Prev>
					) : null}
					{next ? (
						<Pagination.Prev>
							<Link to={`sections/${next.url}`}>{next.title}</Link>
						</Pagination.Prev>
					) : null}
				</Pagination>
			)}
		</>
	);
};

export default PreviousAndNextButtons;
