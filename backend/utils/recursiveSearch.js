const recursiveSearch = (menuItems, sectionId) => {
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
};

export default recursiveSearch;
