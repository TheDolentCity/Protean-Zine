import { darkMode } from "$lib/stores/dark-mode-store";
import { Theme } from "$lib/enums/theme";

export const tools = [
	{
		title: 'Activate dark theme',
		action: () => (darkMode.set(Theme.Dark.name)) 
	},
	{
		title: 'Activate light theme',
		action: () => (darkMode.set(Theme.Light.name)) 
	}
];