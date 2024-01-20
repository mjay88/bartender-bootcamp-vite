import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuItems } from "../menuItems";
export default function Content() {
	const { sectionId } = useParams();

	// console.log(sectionId, "sectionId from content.jsx");
	const content = recursiveSearch(menuItems, sectionId);
	console.log(content, "content");

	function recursiveSearch(menuItems, sectionId) {
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
		// menuItems.forEach((item) => {
		// 	console.log(item, "item");
		// 	if (item.url === sectionId) {
		// 		result = [item.content, item.images];
		// 	} else if (item.submenu && result.length === 0) {
		// 		result = recursiveSearch(item.submenu, sectionId);
		// 	}
		// });

		return result;
	}

	return <div>Content for {sectionId}</div>;
}
