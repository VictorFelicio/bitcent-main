import { ServicesTransaction } from "./finances/services/ServicesTransaction";

class Service {
	get transaction() {
		return new ServicesTransaction();
	}
}

export const service = new Service();
