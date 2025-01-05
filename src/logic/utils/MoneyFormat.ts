export class MoneyFormat {
	private static _language: string = "pt-BR";
	private static _currency: string = "BRL";

	static format(value: number): string {
		return (value ?? 0).toLocaleString(this._language, {
			style: "currency",
			currency: this._currency,
		});
	}
}
