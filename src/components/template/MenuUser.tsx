import { mockUser } from "@/data/constants/mockUser";
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export function MenuUser() {
	const user = mockUser;
	return (
		<Menu>
			<Menu.Target>
				<div className="flex items-center gap-3 cursor-pointer">
					<div className="hidden md:flex flex-col select-none ">
						<span className="text-sm font-bold text-zinc-200">
							{user?.name}
						</span>
						<span className="text-xs text-zinc-400">
							{user?.email}
						</span>
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
					<Menu.Item icon={<IconArrowsRightLeft size={14} />}>
						Finanças
					</Menu.Item>
				</Link>
				<Link href="/user">
					<Menu.Item icon={<IconUser size={14} />}>Usuario</Menu.Item>
				</Link>
			</Menu.Dropdown>
		</Menu>
	);
}
