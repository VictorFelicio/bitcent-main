import React from "react";

export interface TitlePageProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon?: any;
	title: string;
	subtitle?: string;
	className?: string;
}

export default function TitlePage(props: TitlePageProps) {
	return (
		<div className={`flex items-center gap-2 ${props.className ?? ""}`}>
			{props.icon && (
				<div
					className={`
                    text-zinc-500
                `}>
					{React.cloneElement(props.icon, {
						stroke: 1,
						size: props.subtitle ? 50 : 24,
					})}
				</div>
			)}
			<div className="flex flex-col">
				<h2 className="text-zinc-500 text-2xl font-black">{props.title}</h2>
				<h3 className="text-zinc-500 text-sm font-thin -mt-1">{props.subtitle}</h3>
			</div>
		</div>
	);
}
