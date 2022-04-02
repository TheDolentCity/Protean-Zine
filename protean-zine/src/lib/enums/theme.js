export class Theme {
	static Dark = new Theme('Dark');
	static Light = new Theme('Light');

	constructor(name) {
		this.name = name;
	}
}