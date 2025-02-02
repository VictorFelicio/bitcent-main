import { DataFormat } from "@/logic/utils/DataFormat";
import { Button, NumberInput, Popover } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import { useState } from "react";

export interface InputDataProps {
	date?: Date;
	dataChange?: (data: Date) => void;
}

export default function InputData(props: InputDataProps) {
	const today = new Date();

	const [data, setData] = useState<Date>(
		new Date(
			props.date?.getFullYear() ?? today.getFullYear(),
			props.date?.getMonth() ?? today.getMonth(),
			1
		)
	);

	function changeYear(year: number) {
		if (!year) return;
		const newData = new Date(data);
		newData.setFullYear(year);
		setData(newData);
		props.dataChange?.(newData);
	}

	function changemonth(mes: number) {
		const newData = new Date(data);
		newData.setMonth(mes);
		setData(newData);
		props.dataChange?.(newData);
	}

	function increment() {
		const newData = new Date(data);
		newData.setMonth(newData.getMonth() + 1);
		setData(newData);
		props.dataChange?.(newData);
	}

	function decrement() {
		const newData = new Date(data);
		newData.setMonth(newData.getMonth() - 1);
		setData(newData);
		props.dataChange?.(newData);
	}

	return (
		<div className="flex items-center gap-2">
			<Button
				className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `}
				color="red"
				onClick={decrement}>
				<IconChevronLeft size={14} />
			</Button>
			<Popover withArrow>
				<Popover.Target>
					<Button
						className={`
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white cursor-pointer select-none 
                        w-20 md:w-44 text-xs md:text-base px-0 md:px-3
                    `}>
						<span className="hidden md:inline">
							{DataFormat.type.monthYear(data)}
						</span>
						<span className="inline md:hidden">
							{DataFormat.type.monthYear(data)}
						</span>
					</Button>
				</Popover.Target>
				<Popover.Dropdown>
					<div className="flex justify-center mb-5">
						<NumberInput
							value={data.getFullYear()}
							onChange={changeYear}
						/>
					</div>
					<div className="grid grid-cols-3 gap-3">
						{DataFormat.month().map((month, i) => {
							const selected = data.getMonth() === i;
							return (
								<Button
									key={i}
									color={selected ? "red" : "blue"}
									className={`${selected ? "bg-red-500" : "bg-blue-500"}`}
									onClick={() => changemonth(i)}>
									{month}
								</Button>
							);
						})}
					</div>
				</Popover.Dropdown>
			</Popover>
			<Button
				className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `}
				color="red"
				onClick={increment}>
				<IconChevronRight size={14} />
			</Button>
		</div>
	);
}
