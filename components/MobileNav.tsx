"use client";

import React from "react";
import {
	Sheet,
	SheetContent,
	SheetClose,
	SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
	const pathName = usePathname();

	return (
		<section className="w-full max-w-[264px]">
			<Sheet>
				<SheetTrigger asChild>
					<Image
						src="/icons/hamburger.svg"
						width={36}
						height={36}
						alt="hamburger icon"
						className="cursor-pointer sm:hidden"
					/>
				</SheetTrigger>
				<SheetContent side="left" className="border-none bg-dark-1">
					<Link href="/" className="flex items-center gap-1">
						<Image
							src="/icons/logo.svg"
							width={32}
							height={32}
							alt="Video Conference Logo"
							className="max-sm:size-10"
						/>
						<p className="text-[26px] font-extrabold text-white">
							Video Conference
						</p>
					</Link>
					<div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
						<SheetClose asChild>
							<section className="flex h-full flex-col gap-6 pt-16 text-white">
								{sidebarLinks.map((link) => {
									const { route, label, imgUrl, id } = link;
									const isActive = pathName === route;

									return (
										<SheetClose asChild key={`sheetClose__${id}`}>
											<Link
												href={route}
												className={cn(
													"flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
													{
														"bg-blue-1": isActive,
													}
												)}
											>
												<Image
													src={imgUrl}
													alt={label}
													width={20}
													height={20}
												/>
												<p className="font-semibold">{label}</p>
											</Link>
										</SheetClose>
									);
								})}
							</section>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
