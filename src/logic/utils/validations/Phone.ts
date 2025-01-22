export class Phone {
	private static _pattern = "(??) ?????-????";

	static formatExibition(value: string): string {
		const numbers = Phone.extractNumbers(value).split("");
		return numbers
			.reduce((pattern: string, digit: string) => {
				return pattern.replace("?", digit);
			}, this._pattern)
			.split("?")[0]
			.replace(/[-.]$/, "");
	}

	static extractNumbers(value: string): string {
		return value.replace(/[^0-9]+/g, "");
	}
}
