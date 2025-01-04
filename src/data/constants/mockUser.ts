import { Id } from "@/logic/core/common/Id";
import { Usuario } from "@/logic/interface/Usuario";

export const mockUser: Usuario = {
	id: Id.genereateID(),
	name: "Felicio Soares",
	email: "felicio.soares@bitcent.com.br",
};
