import Link from "next/link";
import { ReactNode } from "react";

interface ILinkAppearanceButtonProps {
	children: ReactNode;
	href: string;
	isBlank?: boolean;
}

export const LinkAppearanceButton = ({
	children,
	href,
	isBlank,
}: ILinkAppearanceButtonProps) => {
	return (
		<Link
			aria-label={href}
			className="flex items-center justify-center gap-1 text-white hover:text-green-700 transition-colors duration-200 ease-in dark:bg-transparent text-md font-medium px-4 py-1 border-2 border-green-200 border-y-green-500 hover:border-y-green-200 transition-colors rounded-md"
			href={href}
			target={isBlank ? "_blank" : ""}
			rel={isBlank ? "noopener noreferrer" : ""}
		>
			<span className="sr-only">{href}</span>
			{children}
		</Link>
	);
};
