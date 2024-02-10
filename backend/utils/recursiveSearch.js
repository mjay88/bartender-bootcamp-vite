const recursiveSearch = (menuItems, sectionId) => {
	let result = [];
	//vodka level
	for (let item of menuItems) {
		// console.log(item.title, "vodka level");
		if (item.submenu) {
			//history of vodka level
			for (let submenuItem of item.submenu) {
				// console.log(submenuItem, "history-of-vodka level");
				if (submenuItem.url === sectionId) {
					// console.log(
					// 	submenuItem.url,
					// 	sectionId,
					// 	"looking for baijui-shochu-and-soju"
					// );
					if (submenuItem.images) {
						result = [submenuItem.content, submenuItem.images];
						return result;
					} else {
						result = [submenuItem.content];
						return result;
					}
					// return result;
				} else if (submenuItem.submenu && result.length === 0) {
					// console.log(submenuItem, sectionId, "right before recusive call");
					result = recursiveSearch([submenuItem], sectionId);
				}
			}
		}
	}

	return result;
};

export default recursiveSearch;
