export interface User {
	id: string;
	name: string;
	email: string;
	cpf?: string | null;
	phone?: string | null;
	imageUrl?: string | null;
}
