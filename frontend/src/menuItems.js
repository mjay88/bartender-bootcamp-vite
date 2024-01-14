export const menuItems = [
	//whats the deal with the back slashes?
	{
		title: "Vodka",
		// url: "/vodka",
		submenu: [
			{
				title: "History of Vodka",
				url: "history-of-vodka",
			},
			{
				title: "Production of Vodka",
				url: "/production-of-vodka",
			},
			{
				title: "Discussing Vodkas Taste and Style",
				url: "discussing-vodkas-taste-and-style",
			},
			{
				title: "Other Neutral Spirits",
				url: "other-neutral-spirits",
				submenu: [
					{ title: "Baijiu, Shochu, and Soju", url: "baijiu-shochu-and-soju" },
				],
			},
			{ title: "Tasting And Serving Vodka" },
		],
	},
	{
		title: "Gin",
		// url: "/gin",
		submenu: [
			{
				title: "Production of Gin",
				url: "production-of-gin",
			},
			{
				title: "Leading Styles of Gin",
				url: "leading-styles-of-gin",
			},
			{
				title: "Other Flavored Spirits",
				url: "other-flavored-spirits",
				submenu: [
					{
						title: "Juniper Flavored Spirit Drinks",
						url: "juniper-flavored-spirit-drinks",
					},
					{
						title: "Anise Flavored Spirit Drinks",
						url: "anise-flavored-spirit-drinks",
					},
				],
			},
			{ title: "Tasting And Serving Gin" },
		],
	},
	{
		title: "Whiskey",
		// url: "/whiskey",
		submenu: [
			{
				title: "History of Whiskey",
				url: "history-of-whiskey",
			},
			{
				title: "Production of Whiskey",
				url: "production-of-whiskey",
			},
			{
				title: "Scotch Whiskey",
				url: "scotch-whiskey",
			},
			{
				title: "Irish Whiskey",
				url: "irish-whiskey",
			},
			{
				title: "American Whiskey",
				// url: "american-whiskey",
				submenu: [
					{
						title: "History of American Whiskey",
						url: "history-of-american-whiskey",
					},
					{ title: "Bourbon Whiskey", url: "bourbon-whiskey" },
					{ title: "Tennesse Whiskey", url: "tennesse-whiskey" },
					{
						title: "American Straight Whiskeys",
						url: "american-straight-whiskeys",
					},
				],
			},
			{ title: "Canadian Whiskies", url: "canadian-whiskey" },
			{ title: "Japanese Whisky", url: "japanese-whisky" },
			{ title: "Indian Whisky", url: "indian-whisky" },
			{
				title: "Whiskeys from around the World",
				url: "whiskeys-from-around-the-world",
			},
			{
				title: "Tasting and serving Whiskey",
				url: "tasting-and-serving-whiskey",
			},
		],
	},
	{
		title: "Brandy and other Eaux-de-vie ",
		// url: "/brandy",
		submenu: [
			{
				title: "History of Brandy",
				url: "history-of-brandy",
			},
			{
				title: "Production of Brandy",
				url: "production-of-brandy",
			},
			{
				title: "Grape Brandy",
				url: "grape-brandy",
				submenu: [
					{
						title: "Cognac",
						url: "cognac",
						submenu: [
							{ title: "The Cognac Region", url: "the-cognac-region" },
							{ title: "Production of Cognac", url: "production-of-cognac" },
						],
					},
					{
						title: "Armagnac",
						url: "armagnac",
						submenu: [
							{ title: "The Armagnac Region", url: "the-armagnac-region" },
							{
								title: "Production of Armagnac",
								url: "production-of-armagnac",
							},
						],
					},
					{
						title: "Pisco",
						url: "pisco",
						submenu: [
							{ title: "History of Pisco", url: "history-of-pisco" },
							{
								title: "Production of Pisco",
								url: "production-of-pisco",
							},
							{
								title: "Peruvian Pisco",
								url: "peruvian-pisco",
							},
							{
								title: "Chilean Pisco",
								url: "chilean-pisco",
							},
						],
					},
				],
			},
			{ title: "Calvados", url: "calvados" },
		],
	},
	{
		title: "Rum and other Sugarcane Based Spirits",
		// url: "/rum",
		submenu: [
			{
				title: "History of Rum",
				url: "history-of-Rum",
			},
			{
				title: "Production of Rum",
				url: "/production-of-Rum",
			},
			{
				title: "Rhum Agricole",
				url: "rhum-agricole",
			},
			{
				title: "Rums from around the World",
				url: "world-rums",
			},
			{
				title: "Tasting and serving Rum",
				url: "tasting-and-serving-rum",
			},
		],
	},
	{
		title: "Agave-Based Spirits",
		//url: "/agave",
		submenu: [
			{
				title: "History of Agave based Spirits",
				url: "history-of-agave-based-spirits",
			},
			{
				title: "Tequila",
				url: "tequila",
				submenu: [
					{ title: "Production of Tequila", url: "production-of-tequila" },
					{
						title: "The Tequila Producing Region",
						url: "tequila-producing-region",
					},
					{ title: "Styles of Tequila", url: "styles-of-tequila" },
				],
			},
			{
				title: "Mezcal",
				//url: "mezcal",
				submenu: [
					{ title: "Production of Mezcal", url: "production-of-mezcal" },
					{
						title: "The Mezcal Producing Region",
						url: "mezcal-producing-region",
					},
					{ title: "Styles of Mezcal", url: "styles-of-mezcal" },
				],
			},
			{
				title: "Tasting and serving Agave Spirits",
				url: "tasting-and-serving-agave-spirits",
			},
		],
	},

	{
		title: "Liqueurs",
		// url: "/liqueurs",
		submenu: [
			{
				title: "History of Liqueurs",
				url: "history-of-liqueurs",
			},
			{
				title: "Production of Liqueurs",
				url: "production-of-liqueurs",
			},
			{
				title: "Categorization of Liqueurs",
				url: "categorization-of-liqueurs",
				submenu: [
					{ title: "Essential Liqueurs", url: "essential-liqueurs" },
					{
						title: "Herbal Liqueurs",
						url: "herbal-liqueurs",
					},
					{
						title: "Bean, Nut, and Seed liqueurs",
						url: "bean-nut-and-seed-liqueurs",
					},
					{ title: "Cream Liqueurs", url: "cream-liqueurs" },
					{ title: "Whiskey Liqueurs", url: "whiskey-liqueurs" },
				],
			},
		],
	},
	{
		title: "Vermouth, Amari, and Bitters",
		// url: "/vermouth-amari-and-bitters",
		submenu: [
			{
				title: "The Taste Component of Bitter",
				url: "the-taste-component-of-bitter",
			},
			{
				title: "Aromatized Wines",
				url: "the-taste-component-of-bitter",
			},
			{
				title: "Vermouth",
				url: "vermouth",
			},
			{
				title: "New World Vermouth",
				url: "new-world-vermouth",
			},
			{
				title: "Vini Amari/Bittered Wines",
				url: "vini-amari-bittered-wines",
				submenu: [
					{ title: "Quinquina", url: "quinquina" },
					{ title: "Americano", url: "americano" },
					{ title: "Spirit Amari", url: "spirit-amari" },
					{ title: "French Amer", url: "french-amer" },
					{
						title: "Bittered Spirits of the World",
						url: "bittered-spirits-of-the-world",
					},
				],
			},
		],
	},
	{
		title: "Cocktology",

		submenu: [
			{
				title: "Modern Cocktology and Craft Cocktails",
				url: "modern-cocktology-and-craft-cocktails",
			},
			{
				title: "Key Ingredients for the Bar",
				url: "aromatized-wines",
			},
			{
				title: "Professional Bar Equipment",
				url: "professional-bar-equipment",
			},
			{
				title: "Bar Terminology",
				url: "bar-terminology",
			},
			{
				title: "Methodology",
				url: "methodology",
			},
			{
				title: "Vini Amari/Bittered Wines",
				url: "vini-amari-bittered-wines",
				submenu: [
					{ title: "Quinquina", url: "quinquina" },
					{ title: "Americano", url: "quinquina" },
					{ title: "Spirit Amari", url: "spirit-amari" },
					{ title: "French Amer", url: "french-amer" },
					{
						title: "Bittered Spirits of the World",
						url: "bittered-spirits-of-the-world",
					},
				],
			},
		],
	},
];
