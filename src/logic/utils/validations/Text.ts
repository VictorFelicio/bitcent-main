export class Text {
	static validateTextlength(
		value: string,
		min: number,
		max: number,
		trim: boolean
	): boolean {
		const finalValue = (trim ? value?.trim?.() : value) ?? "";
		return finalValue.length >= min && finalValue.length <= max;
	}
}
