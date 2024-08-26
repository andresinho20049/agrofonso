"use client";

import { pages } from "@onion/hooks/usePage";
import { useState } from "react";
import { HamburgerButton } from "./hamburger";
import { LogoComponent } from "./Logo";
import { NavBarLink } from "./navbar-link";
import { ThemeToggle } from "./theme-toggle";

export const NavBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav className="flex flex-wrap items-center justify-between p-3">
			<LogoComponent />
			<div className="flex md:hidden">
				<HamburgerButton open={open} setOpen={setOpen} />
			</div>
			<div
				className={` ${
					open ? "flex flex-col" : "hidden"
				} w-full md:w-auto md:flex md:flex-row gap-4 items-center md:mt-0 md:border-none`}
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
				<ThemeToggle />
			</div>
		</nav>
	);
};
