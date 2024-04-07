"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
	const pathName = usePathname();

	return (
		<section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
			<div className="flex flex-1 flex-col gap-6">
				{sidebarLinks.map((link) => {
					const { route, label, imgUrl, id } = link;
					const isActive = pathName === route;

					return (
						<Link
							href={route}
							key={`sidebar__${id}`}
							className={cn(
								"flex gap-4 items-center p-4 rounded-lg justify-start",
								{
									"bg-blue-1": isActive,
								}
							)}
						>
							<Image src={imgUrl} alt={label} width={24} height={24} />
							<p className="text-lg font-semibold max-lg:hidden">{label}</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default Sidebar;
