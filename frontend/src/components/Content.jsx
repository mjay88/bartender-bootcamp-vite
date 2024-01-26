import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuItems } from "../menuItems";
import Grid from "./Grid";
import axios from "axios";
export default function Content() {
	const [content, setContent] = useState([]);
	const { sectionId } = useParams();
	console.log(sectionId, "sectionId");

	useEffect(() => {
		const fetchContent = async () => {
			const { data } = await axios.get(`/${sectionId}`);
			console.log(data, "inside fetchContent");
			setContent(data);
		};

		fetchContent();
	}, [sectionId]);

	// console.log(sectionId, "sectionId from content.jsx");
	const recursiveSearch = useCallback(
		(menuItems, sectionId) => {
			let result = [];

			for (let item of menuItems) {
				if (item.submenu) {
					for (let submenuItem of item.submenu) {
						if (submenuItem.url === sectionId) {
							if (submenuItem.images) {
								result = [submenuItem.content, submenuItem.images];
							} else {
								result = [submenuItem.content];
							}
							return result;
						} else if (submenuItem.submenu && result.length === 0) {
							result = recursiveSearch(submenuItem.submenu, sectionId);
						}
					}
				}
			}

			return result;
		},
		[menuItems, sectionId]
	);

	// const content = recursiveSearch(menuItems, sectionId);
	console.log(content, "content");

	// function recursiveSearch(menuItems, sectionId) {
	// 	let result = [];

	// 	for (let item of menuItems) {
	// 		if (item.submenu) {
	// 			for (let submenuItem of item.submenu) {
	// 				if (submenuItem.url === sectionId) {
	// 					if (submenuItem.images) {
	// 						result = [submenuItem.content, submenuItem.images];
	// 					} else {
	// 						result = [submenuItem.content];
	// 					}
	// 					return result;
	// 				} else if (submenuItem.submenu && result.length === 0) {
	// 					result = recursiveSearch(submenuItem.submenu, sectionId);
	// 				}
	// 			}
	// 		}
	// 	}

	// 	return result;
	// }

	return (
		<div>
			Content for {sectionId}
			<>
				<Grid paragraphs={content[0]} images={content[1]} />
			</>
		</div>
	);
}
