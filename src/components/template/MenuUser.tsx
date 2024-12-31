import { mockUser } from "@/data/constants/mockUser";
import { Avatar, Menu } from "@mantine/core";
import { IconArrowsRightLeft } from "@tabler/icons-react";

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
						src={
							user?.imageUrl ??
							"https://source.unsplash.com/random/100x100/?abstract"
						}
					/>
				</div>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item icon={<IconArrowsRightLeft size={14} />}>
					Finanças
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
}
