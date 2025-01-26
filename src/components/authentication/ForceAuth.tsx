import { useAuth } from "@/data/hooks/useAuth";
import { Loading } from "../template/Loading";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface ForceAuthProps {
	children: ReactNode;
}

export function ForceAuth(props: ForceAuthProps) {
	const { isLoading, user } = useAuth();
	const router = useRouter();

	if (isLoading) {
		return <Loading />;
	} else if (user?.email) {
		return props.children;
	} else {
		router.push("/");
		return <Loading />;
	}
}
