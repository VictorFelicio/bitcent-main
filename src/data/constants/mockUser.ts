import { Id } from "@/logic/core/common/Id";
import { User } from "@/logic/interface/Usuario";

export const mockUser: User = {
	id: Id.genereateID(),
	name: "Felicio Soares",
	email: "felicio.soares@bitcent.com.br",
	cpf: "12345678900",
	phone: "19940028922",
};
