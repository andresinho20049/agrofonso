import { ContactButton } from "@onion/components/client/navbar/contact";
import {
	ShowcaseImageWithTextSimple,
	ShowcaseImageWithTextSimpleType,
} from "../showcase/showcase-img-text-simple";

const showCases: ShowcaseImageWithTextSimpleType[] = [
	{ imgSrc: "/icons/tractor-96.png", text: "Equipamentos novos e modernos" },
	{
		imgSrc: "/icons/resource-64.png",
		text: "Melhor aproveitamento dos recursos",
	},
	{ imgSrc: "/icons/delivery-time-80.png", text: "Melhor tempo de colheita" },
	{ imgSrc: "/icons/farmer-100.png", text: "Time altamente qualificado" },
];

export const HomeHero = () => {
	return (
		<section className="relative w-full h-96">
			<div className="absolute inset-0 opacity-30">
				<img
					src="/img/2c1a585f-bab1-4300-bf9b-52d154d687e5.jpeg"
					alt="Background Image"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="absolute inset-9 flex flex-col items-start justify-end">
				<div className="md:w-1/2 mb-4 md:mb-0">
					<h1 className="text-green-800 hover:text-green-700 font-medium text-4xl md:text-5xl shadow-md leading-tight mb-2 select-none">
						Onion Garden
					</h1>
					<p className="font-regular text-xl mb-8 mt-4">
						Sementes de qualidade, raízes fortes.
						<br />
						Cultivando o futuro, desde a Bahia com sabor e
						qualidade, em todo o mundo.
					</p>
				</div>
				<div className="hidden lg:flex flex-wrap text-center justify-center">
					{showCases.map((sc) => (
						<ShowcaseImageWithTextSimple
							imgSrc={sc.imgSrc}
							text={sc.text}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
