import { Finances } from "@/components/finances";
import { Landing } from "@/components/landing";
import { Loading } from "@/components/template/Loading";
import { useAuth } from "@/data/hooks/useAuth";

export default function Home() {
	const { user, isLoading } = useAuth();

	if (isLoading) return <Loading />;

	return user ? <Finances /> : <Landing />;
}
