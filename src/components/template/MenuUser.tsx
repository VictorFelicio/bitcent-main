//import { mockUser } from "@/data/constants/mockUser";
import { useAuth } from "@/data/hooks/useAuth";
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft, IconLogout, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export function MenuUser() {
	const { user, logout } = useAuth();
	return (
		<Menu>
			<Menu.Target>
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="hidden md:flex flex-col select-none ">
						<span className="text-sm font-bold text-zinc-200">{user?.name}</span>
						<span className="text-xs text-zinc-400">{user?.email}</span>
					</div>
					<Avatar
						size={40}
						radius="xl"
						src={user?.imageUrl ?? "https://picsum.photos/100"}
					/>
				</div>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>Usuário</Menu.Label>
				<Link href="/">
					<Menu.Item icon={<IconArrowsRightLeft size={14} />}>Finanças</Menu.Item>
				</Link>
				<Link href="/user">
					<Menu.Item icon={<IconUser size={14} />}>Meus Dados</Menu.Item>
				</Link>
				<Menu.Divider />
				<Menu.Item
					color="red"
					icon={<IconLogout size={14} />}
					onClick={logout}>
					Sair do Sistema
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}
