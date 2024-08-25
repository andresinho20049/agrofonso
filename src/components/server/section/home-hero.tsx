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
		<section className="relative w-full h-64 lg:h-96">
			<div className="absolute inset-0 opacity-30">
				<img
					src="/img/cebola_caminhao.jpeg"
					alt="Background Image"
					className="object-cover object-center w-full h-full"
				/>
			</div>
			<div className="absolute inset-9 flex flex-col items-start justify-end">
				<div className="md:w-1/2 mb-4 md:mb-0">
					<h1 className="text-start">Onion Garden</h1>
					<h2 className="text-lg lg:text-2xl text-start">
						Sementes de qualidade, raízes fortes.
						<br />
						Cultivando o futuro, desde a Bahia com sabor e
						qualidade, em todo o mundo.
					</h2>
				</div>
				<div className="hidden lg:flex flex-wrap gap-2 my-4 w-full">
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
