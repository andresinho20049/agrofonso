import Image from "next/image";
import { ReactNode } from "react";
import { LinkAppearanceButton } from "../link/link-appearance-button";

export interface IFullHeroSectionProps {
	title: string | ReactNode;
	msg: string;
	urlLink?: string;
	textLink?: string;
	imgSrc: string;
}

export const FullHeroSection = ({
	title,
	msg,
	urlLink,
	textLink,
	imgSrc,
}: IFullHeroSectionProps) => {
	return (
		<section className="flex flex-wrap h-screen max-w-screen-2xl mx-auto">
			<div className="flex flex-col justify-between w-full h-full lg:w-8/12">
				<section className="px-4 flex items-center h-full lg:mt-0">
					<div className="w-full">
						{title}
						<div className="w-36 h-2 bg-green-700 my-4"></div>
						<p className="text-md lg:text-xl mb-5 lg:mb-16">
							{msg}
						</p>
						<div className="w-56">
							{urlLink && (
								<LinkAppearanceButton href={urlLink}>
									<span className="sr-only">{textLink}</span>
									{textLink || "Learn more"}
								</LinkAppearanceButton>
							)}
						</div>
					</div>
				</section>
			</div>
			<div className="hidden lg:flex h-full w-4/12 px-2 items-center">
				<Image
					width={960}
					height={1280}
					src={imgSrc}
					alt="Ilustrate Image"
					className="object-cover object-center h-5/6"
				/>
			</div>
		</section>
	);
};
