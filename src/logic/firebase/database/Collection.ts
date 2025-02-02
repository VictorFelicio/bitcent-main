import {
	collection,
	deleteDoc,
	doc,
	DocumentData,
	DocumentSnapshot,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	OrderByDirection,
	query,
	QueryConstraint,
	setDoc,
	where,
	WhereFilterOp,
} from "firebase/firestore";
import { app } from "../config/app";
import { Id } from "@/logic/core/common/Id";

export interface Filter {
	attrb: string;
	operation: WhereFilterOp;
	value: any;
}

export class Collection {
	private _convertOfFirebase(snapshot: DocumentSnapshot<DocumentData>) {
		if (!snapshot.exists()) return null;
		const entity: any = { ...snapshot.data(), id: snapshot.id };

		if (!entity) return entity;

		return Object.keys(entity).reduce((obj: any, attr: string) => {
			const value: any = entity[attr];
			return { ...obj, [attr]: value.toDate?.() ?? value };
		}, {});
	}

	async save(path: string, entity: any, id?: string): Promise<any> {
		const database = getFirestore(app);
		const finalId = id ?? entity.id ?? Id.genereateID();
		const docRef = doc(database, path, finalId);

		await setDoc(docRef, entity);

		return {
			...entity,
			id: entity.id ?? finalId,
		};
	}

	async delete(path: string, id?: string): Promise<boolean> {
		if (!id) return false;

		const database = getFirestore(app);
		const docRef = doc(database, path, id);
		const itemInDatase = await getDoc(docRef);

		if (!itemInDatase.exists()) return false;
		await deleteDoc(docRef);
		return true;
	}

	async consult(path: string, sortBy?: string, direction?: OrderByDirection) {
		const database = getFirestore(app);
		const collectionRef = collection(database, path);
		const filter: QueryConstraint[] = [];
		const order = sortBy ? [orderBy(sortBy, direction)] : [];
		const consult = query(collectionRef, ...filter, ...order);
		const result = await getDocs(consult);

		return result.docs.map(this._convertOfFirebase) ?? [];
	}

	async consultById(path: string, id: string): Promise<any> {
		if (!id) return null;
		const database = getFirestore(app);
		const docRef = doc(database, path, id);

		const result = await getDoc(docRef);

		return this._convertOfFirebase(result);
	}

	async consultWithFilter(
		path: string,
		filters: Filter[],
		sortBy?: string,
		direction?: OrderByDirection
	): Promise<any[]> {
		const database = getFirestore(app);
		const collectionRef = collection(database, path);

		const filtersWhere = filters?.map((f) => where(f.attrb, f.operation, f.value)) ?? [];

		const ordernation = sortBy ? [orderBy(sortBy, direction)] : [];

		const consult = query(collectionRef, ...filtersWhere, ...ordernation);
		const result = await getDocs(consult);

		return result.docs.map(this._convertOfFirebase) ?? [];
	}
}
