"use client";

import { ReactNode, useState } from "react";
import { ContactButton } from "./contact";
import { HamburgerButton } from "./hamburger";
import { NavBarLink } from "./navbar-link";

type PageType = {
	href: string;
	label: string | ReactNode;
};

export type NavBarType = {
	title: string | ReactNode;
	pages: PageType[];
};

export const NavBar = ({ title, pages }: NavBarType) => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex flex-wrap items-center justify-between p-3 bg-black">
			<div className="text-xl">{title}</div>
			<div className="flex md:hidden">
				<HamburgerButton open={open} setOpen={setOpen} />
			</div>
			<div
				className={` ${
					open ? "block" : "hidden"
				} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none`}
			>
				{pages.map((p) => (
					<NavBarLink key={p.href} href={p.href} label={p.label} />
				))}
			</div>

			<div
				className={`${
					open ? "block" : "hidden"
				} w-full text-end md:flex md:w-auto px-2 py-2 md:rounded`}
			>
				<div className="flex justify-end">
					<ContactButton
						text="Contato"
						imgSrc="/icons/telegram.svg"
					/>
				</div>
			</div>
		</nav>
	);
};
