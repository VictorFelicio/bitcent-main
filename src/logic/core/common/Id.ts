import { v4 } from "uuid";

export class Id {
	static genereateID(): string {
		return v4().slice(0, 8);
	}
}
