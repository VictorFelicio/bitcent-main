export class MoneyFormat {
	private static _language: string = "pt-BR";
	private static _currency: string = "BRL";

	static format(value: number): string {
		return (value ?? 0).toLocaleString(this._language, {
			style: "currency",
			currency: this._currency,
		});
	}

	static unformat(value: string): number {
		const nums = value.replace(/[^0-9]+/g, "");
		const i = nums.length - 2;
		return Number(`${nums.substring(0, i)}.${nums.substring(i)}`);
	}
}
