export class DataFormat {
	static type = {
		dayMonthYear(date: Date, separetor: string = "/"): string {
			const day = date?.getDate?.().toString().padStart(2, "0");
			const month = (date?.getMonth() + 1).toString().padStart(2, "0");
			return `${day}${separetor}${month}${separetor}${date?.getFullYear()}`;
		},
	};
}
