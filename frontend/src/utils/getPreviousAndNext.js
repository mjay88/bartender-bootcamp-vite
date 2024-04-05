//should utils be a custom hook?
export const getPreviousAndNext = (menuItems, url) => {
	//if (url === "") return;
	let result;
	//iterate through menu menuItems
	for (let i = 0; i < menuItems.length; i++) {
		//every menuItem has a submenu item forsure
		//iterate through menuItems.submenu
		for (let j = 0; j < menuItems[i].submenu.length; j++) {
			//if submenuItem.url === url return submenuItem

			if (menuItems[i].submenu[j].url === url) {
				result = [getPrevious(menuItems, i, j), getNext(menuItems, i, j)];
				//previous production-of-brandy to history-of-brandy
				// console.log(getPrevious(menuItems, i, j), "previous 1");
				// console.log(getNext(menuItems, i, j), "next 1");

				break;
			} else if (menuItems[i].submenu[j].submenu) {
				for (let k = 0; k < menuItems[i].submenu[j].submenu.length; k++) {
					if (menuItems[i].submenu[j].submenu[k].url === url) {
						result = [
							getPrevious(menuItems, i, j, k),
							getNext(menuItems, i, j, k),
						];

						// console.log("firing", menuItems[i].submenu[j].submenu[k - 1])

						// console.log(getPrevious(menuItems, i, j, k), "previous");
						// console.log(getNext(menuItems, i, j, k), "next");

						break;
					} else if (menuItems[i].submenu[j].submenu[k].submenu) {
						for (
							let l = 0;
							l < menuItems[i].submenu[j].submenu[k].submenu.length;
							l++
						) {
							if (menuItems[i].submenu[j].submenu[k].submenu[l].url === url) {
								result = [
									getPrevious(menuItems, i, j, k, l),
									getNext(menuItems, i, j, k, l),
								];

								break;
							}
						}
					}
				}
			}
		}
	}
	return result;
};

function getNext(menuItems, i, j, k, l) {
	// console.log(i, j, k, l, "indexes")
	let next = undefined;

	if (l >= 0 && menuItems[i].submenu[j].submenu[k].submenu[l + 1]) {
		// console.log("firing")
		next = menuItems[i].submenu[j].submenu[k].submenu[l + 1];
		return next;
	}
	if (k >= 0 && menuItems[i].submenu[j].submenu[k + 1]) {
		// console.log("not firing")
		if (
			menuItems[i].submenu[j].submenu[k + 1].submenu &&
			menuItems[i].submenu[j].submenu[k + 1].submenu.at(0)
		) {
			next = menuItems[i].submenu[j].submenu[k + 1].submenu.at(0);
			return next;
		}
		next = menuItems[i].submenu[j].submenu[k + 1];
		return next;
	}

	if (j >= 0 && menuItems[i].submenu[j + 1]) {
		// console.log(menuItems[i].submenu[j],'firing')

		if (menuItems[i].submenu[j + 1].submenu) {
			if (menuItems[i].submenu[j + 1].submenu.at(0).submenu) {
				next = menuItems[i].submenu[j + 1].submenu.at(0).submenu.at(0);
				return next;
			}
			next = menuItems[i].submenu[j + 1].submenu.at(0);
			return next;
		}

		next = menuItems[i].submenu[j + 1];
		return next;
	}

	if (menuItems[i + 1]) {
		// console.log("firing", menuItems[i - 1])
		if (menuItems[i + 1].submenu.at(0).submenu) {
			next = menuItems[i + 1].submenu.at(0).submenu.at(0);
			return next;
		}
		if (menuItems[i + 1].submenu.at(0)) {
			next = menuItems[i + 1].submenu.at(0);
			return next;
		}
	}

	return next;
}
function getPrevious(menuItems, i, j, k, l) {
	let previous = undefined;
	//check immediate sublevel for - 1 index,

	if (l && menuItems[i].submenu[j].submenu[k].submenu[l - 1]) {
		previous = menuItems[i].submenu[j].submenu[k].submenu[l - 1];
		return previous;
	}
	if (k && menuItems[i].submenu[j].submenu[k - 1]) {
		// console.log(menuItems[i].submenu[j].submenu[k - 1], 'line 1748')
		if (
			menuItems[i].submenu[j].submenu[k - 1].submenu &&
			menuItems[i].submenu[j].submenu[k - 1].submenu.at(-1)
		) {
			previous = menuItems[i].submenu[j].submenu[k - 1].submenu.at(-1);
			return previous;
		}
		previous = menuItems[i].submenu[j].submenu[k - 1];
		return previous;
	}
	if (j && menuItems[i].submenu[j - 1]) {
		if (menuItems[i].submenu[j - 1].submenu) {
			// console.log("firing", menuItems[i].submenu[j - 1].submenu.at(-1).submenu.at(-1))
			if (menuItems[i].submenu[j - 1].submenu.at(-1).submenu) {
				//calvados to production-of-pisco
				previous = menuItems[i].submenu[j - 1].submenu.at(-1).submenu.at(-1);
				return previous;
			}
			previous = menuItems[i].submenu[j - 1].submenu.at(-1);
			return previous;
		}

		previous = menuItems[i].submenu[j - 1];
		return previous;
	}
	if (menuItems[i - 1]) {
		// console.log("firing", menuItems[i - 1])
		if (menuItems[i - 1].submenu.at(-1).submenu) {
			previous = menuItems[i - 1].submenu.at(-1).submenu.at(-1);
			return previous;
		}
		if (menuItems[i - 1].submenu.at(-1)) {
			previous = menuItems[i - 1].submenu.at(-1);
			return previous;
		}
	}
	//if undefined, check next sublevel for last index,
	//if last index contains a submenu, get that last index
	return previous;
}
