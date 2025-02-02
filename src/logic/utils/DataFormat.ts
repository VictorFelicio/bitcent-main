export class DataFormat {
	private static _language = "pt-BR";
	static type = {
		dayMonthYear(date: Date, separetor: string = "/"): string {
			const day = date?.getDate?.().toString().padStart(2, "0");
			const month = (date?.getMonth() + 1).toString().padStart(2, "0");
			return `${day}${separetor}${month}${separetor}${date?.getFullYear()}`;
		},

		monthYear(date: Date, language?: string): string {
			return date?.toLocaleDateString?.(language ?? DataFormat._language, {
				month: "long",
				year: "numeric",
			} as Intl.DateTimeFormatOptions);
		},
	};

	static month(): string[] {
		return Array(12)
			.fill(0)
			.map((_, i) =>
				new Date(2000, i, 1)
					.toLocaleDateString(DataFormat._language, {
						month: "short",
					})
					.toUpperCase()
					.substring(0, 3)
			);
	}

	static getFirstDay(date: Date) {
		return new Date(date.getFullYear(), date.getMonth(), 1);
	}
	static getLastDay(date: Date) {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
	}
}
