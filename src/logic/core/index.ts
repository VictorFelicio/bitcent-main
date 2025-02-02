import { ServicesTransaction } from "./finances/services/ServicesTransaction";
import { ServicesUser } from "./user/service/ServicesUser";

class Service {
	get transaction() {
		return new ServicesTransaction();
	}

	get user() {
		return new ServicesUser();
	}
}

export const service = new Service();
