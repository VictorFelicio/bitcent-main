export class CPF {
	private static _pattern = "???.???.???-??";

	static format(value: string): string {
		const digits = CPF.extractDigits(value).split("");
		return digits
			.reduce((masked: string, digit: string) => {
				return masked.replace("?", digit);
			}, this._pattern)
			.split("?")[0]
			.replace(/[-.]$/, "");
	}

	static extractDigits(value: string): string {
		return value.replace(/[^0-9]+/g, "");
	}
}
