const recursiveFlatten = (items, result = []) => {
	for (let item of items) {
		// console.log(item, 'item')
		if (item.submenu) {
			for (let subItem of item.submenu) {
				// console.log(subItem.submenu, "subItem")
				if (subItem.submenu) {
					// console.log(subItem.submenu, "subItem.submenu");
					// console.log("firing");
					recursiveFlatten([subItem], result);
				} else if (subItem.content) {
					result.push(subItem);
				}
			}
		}
	}
	return result;
};

export default recursiveFlatten;
