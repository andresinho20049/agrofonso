"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export type NavBarLinkType = LinkProps & {
	href: string;
	label: string | ReactNode;
};

export const NavBarLink = ({ href, label, ...props }: NavBarLinkType) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={`block md:inline-block ${
				href === pathname ? "text-green-700" : "text-white"
			} hover:text-green-400 px-3 py-3 md:border-none`}
			{...props}
		>
			{label}
		</Link>
	);
};
