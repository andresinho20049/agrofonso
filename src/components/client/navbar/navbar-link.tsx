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
			className={`no-underline ${
				href === pathname ? "text-green-700" : ""
			} md:border-none`}
			{...props}
		>
			{label}
		</Link>
	);
};
