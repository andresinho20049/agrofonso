import { ReactNode } from "react";

type PageType = {
	href: string;
	label: string | ReactNode;
};

export const pages: PageType[] = [
	{ label: "Home", href: "/" },
	{ label: "Sobre", href: "/sobre" },
	{ label: "Contato", href: "/contato" },
];
