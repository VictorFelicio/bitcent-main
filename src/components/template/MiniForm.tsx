import { Button } from "@mantine/core";
import { ReactNode } from "react";

interface MiniFormProps {
	children: ReactNode;
	title: string;
	description: string;
	footerDescription: string;
	canSave: boolean;
	save: () => void;
}

export function MiniForm(props: MiniFormProps) {
	return (
		<div
			className={`
            flex flex-col
            text-white overflow-hidden
            border border-zinc-800 rounded-lg
            `}>
			<div className="flex flex-col p-7">
				<div className="text-3xl font-black">{props.title}</div>
				<div className="mt-4 text-zinc-400">{props.description}</div>
				<div className="mt-3">{props.children}</div>
			</div>
			<div
				className={`
                flex justify-end sm:justify-between items-center
                bg-black px-7 py-5
                `}>
				<span className="hidden sm:inline text-zinc-400">
					{props.footerDescription}
				</span>
				<Button
					disabled={!props.canSave}
					className={`${props.canSave ? "bg-green-600 hover:bg-green-800" : null}`}
					onClick={() => (props.canSave ? props.save() : null)}>
					Salvar
				</Button>
			</div>
		</div>
	);
}
