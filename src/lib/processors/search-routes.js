

export const routes = [
	{
		title: null,
		items: [
			{
				title: 'Home',
				link: '/',
			},
			{
				title: 'Settings',
				link: '/settings',
			},
		],
	},
	{
		title: 'Widgets',
		items: [
			{
				title: 'Overview',
				link: '/widgets/overview',
			},
			{
				title: 'Reading Time',
				link: '/widgets/reading-time',
			},
		],
	},
];

// Boyer Moore Pattern Matching
export function containsPattern(content, pattern) {
	let patternLength = pattern.length;
	let contentLength = content.length;
	let skip = 0;
	let res = [];

	// Initialize map for comparison
	let map = new Array(256);
	for (let c = 0; c < 256; c++) {
		map[c] = -1;
	}

	// Setup first comparative iteration
	for (let j = 0; j < patternLength; j++) {
		map[pattern[j]] = j;
	}

	// Iterate until the pattern has been compared against the entire length of content
	for (let i = 0; i <= contentLength - patternLength; i += skip) {
		for (let j = patternLength - 1; j >= 0; j--) {
			if (pattern[j] != content[i + j]) {
				skip = Math.max(1, j - map[content[i + j].charCodeAt(0)]);
				break;
			}
		}
		if (skip == 0) {
			return true;
		}
	}

	// Default
	return false;
}