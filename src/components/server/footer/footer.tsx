import { NavBarLink } from "@onion/components/client/navbar/navbar-link";
import { pages } from "@onion/hooks/usePage";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export const FooterComponent = () => {
	const FlexContainer = ({
		title,
		children,
	}: {
		title: string;
		children: ReactNode;
	}) => (
		<div className={"flex flex-col flex-1 gap-4 p-4"}>
			<h2>{title}</h2>
			{children}
		</div>
	);

	return (
		<section className={`bg-transparent w-full`}>
			<div className="container mx-auto my-8">
				<div className="flex flex-col space-y-8 divide-y-2 divide-stone-800 md:divide-opacity-40">
					{/* Site section */}
					<div className="flex max-sm:flex-col justify-between divide-x divide-stone-800 divide-opacity-40">
						<FlexContainer title={"Menu"}>
							<aside>
								<nav className="flex flex-col gap-2 items-center">
									{pages.map((p) => (
										<NavBarLink
											key={p.href}
											href={p.href}
											label={p.label}
										/>
									))}
								</nav>
							</aside>
						</FlexContainer>
						<FlexContainer title="Sobre nós">
							<ul className="text-center">
								<li>
									<span>
										{" "}
										Sabor, saúde e sustentabilidade
									</span>
								</li>
								<li>
									<span>
										Cebolas frescas, receitas deliciosas e
										inspiração para a vida
									</span>
								</li>
								<li>
									<span>
										Vem conhecer a nossa horta e nossas
										receitas incríveis!
									</span>
								</li>
								<li>
									<span>
										Sabor, natureza e amor: siga-nos no{" "}
										<Link
											href={
												"https://www.instagram.com/oniongarde?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
											}
										>
											@OnionGarden
										</Link>{" "}
										para descobrir a nossa história
									</span>
								</li>
							</ul>
						</FlexContainer>
						<FlexContainer title="Social">
							<div className="flex flex-col gap-4">
								<div className="flex justify-center gap-8">
									<Link
										href={
											"https://www.instagram.com/oniongarde/"
										}
										target="_blank"
									>
										<Image
											alt="Instagram"
											src={"/icons/instagram.svg"}
											width={36}
											height={36}
											className="h-8 w-8"
										/>
									</Link>
									<Link
										href={
											"https://api.whatsapp.com/send?phone=557499734929"
										}
										target="_blank"
									>
										<Image
											alt="Instagram"
											src={"/icons/whatsapp.svg"}
											width={36}
											height={36}
											className="h-8 w-8"
										/>
									</Link>
								</div>
								<div>
									<p className="text-center">
										Encontre nossos agricultores e ouça suas
										histórias de paixão, dedicação e
										perseverança!
									</p>
								</div>
							</div>
						</FlexContainer>
					</div>

					{/* Copyright section */}
					<div className="flex max-sm:flex-col max-sm:space-y-10 justify-between items-center pt-8">
						<div className="flex flex-col items-center gap-2">
							<Link href={"https://github.com/andresinho20049"}>
								<Image
									src="/logo/andresinho20049.png"
									width={48}
									height={48}
									alt="Picture of the author"
								/>
							</Link>
							<CopyrightComponent />
						</div>
						<aside>
							<nav className="flex items-end gap-8">
								<LinkCopyright href={"/"}>
									Privacy Policy
								</LinkCopyright>
								<LinkCopyright href={"/"}>
									Terms & Conditions
								</LinkCopyright>
							</nav>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

type LinkCopyrightPropsType = LinkProps & {
	children: ReactNode;
};

const LinkCopyright = ({
	href,
	children,
	...props
}: LinkCopyrightPropsType) => (
	<Link
		href={href}
		{...props}
		className="text-sm text-center no-underline hover:underline decoration-cyan-700 hover:text-cyan-700"
	>
		{children}
	</Link>
);

const CopyrightComponent = () => {
	const currentYear = new Date().getFullYear();
	const copyrightDate = 2020 + (currentYear > 2020 ? `-${currentYear}` : "");

	const copyrightName = "Andresinho20049";

	return (
		<LinkCopyright href="https://github.com/andresinho20049">
			{`Developed by `}
			{copyrightName}
			<br />
			&copy; Copyright {copyrightDate}
		</LinkCopyright>
	);
};
