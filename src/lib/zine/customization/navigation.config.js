

const config = {
	meta: {},
	tree: [
		{
			title: 'Home',
			link: '/',
			children: null
		},
		{
			title: 'Settings',
			link: '/settings',
			children: null
		},
		{
			title: 'Widgets',
			link: '/widgets',
			children: [
				{
					title: 'Reading Time',
					link: '/widgets/reading-time',
					children: null
				},
			]
		},
		{
			title: 'Customization',
			link: '/customization',
			children: [
				{
					title: 'Layouts',
					link: '/customization/layouts',
					children: [
						{
							title: 'Default Layout',
							link: '/customization/layouts/default',
							children: null
						},
						{
							title: 'Paper Layout',
							link: '/customization/layouts/paper',
							children: null
						},
					]
				},
				{
					title: 'Typography',
					link: '/customization/typography',
					children: null
				},
			]
		},
	]
}

export default config;