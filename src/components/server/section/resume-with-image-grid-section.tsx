import Image from "next/image";
import { ImageGridItem } from "../image/image-grid";

export const ResumeWithImageGridSection = () => {
	return (
		<section className="min-h-screen bg-second-light dark:bg-second-dark my-0 py-8">
			<div className="max-w-screen-2xl mx-auto ">
				<div className="block lg:hidden">
					<TitleSection />
				</div>
				<div className="flex flex-col gap-8 lg:flex-row px-4">
					<GridImage />
					<ResumeComponent />
				</div>
			</div>
		</section>
	);
};

const TitleSection = () => {
	return (
		<div>
			<h1>Onion Garden</h1>

			<h2 className="max-sm:text-xl">
				O Avanço da Safra Brasileira: Uma História de Sucesso e
				Desenvolvimento
			</h2>
		</div>
	);
};

const GridImage = () => {
	return (
		<div className="grid lg:w-2/3 grid-cols-4 gap-4">
			<div className="col-span-4 sm:col-span-4 relative max-h-72">
				<ImageGridItem src={"/img/cebola_cesta.jpg"} />
			</div>
			<div className="max-sm:hidden col-span-4 sm:col-span-2 relative max-h-64">
				<ImageGridItem src={"/img/na_roca.jpg"} />
			</div>
			<div className="max-sm:hidden col-span-4 sm:col-span-2 row-span-2 relative max-h-[35rem]">
				<ImageGridItem src={"/img/tete_cabrido.gif"} />
			</div>
			<div className="col-span-4 sm:col-span-1 relative max-sm:max-h-56 max-h-72">
				<ImageGridItem src={"/img/tratozera-min.gif"} />
			</div>
			<div className="col-span-4 sm:col-span-1 relative sm:max-h-72">
				<ImageGridItem src={"/img/macro_photo.jpg"} />
			</div>
		</div>
	);
};

const ResumeComponent = () => {
	return (
		<article className="w-full lg:w-1/2">
			<div className="hidden lg:block my-12">
				<TitleSection />
			</div>

			<div className="space-y-4 lg:space-y-8">
				<p>
					A safra brasileira tem sido uma das mais importantes e
					dinâmicas do mundo, com um crescimento contínuo e
					sustentável nos últimos anos. Desde a década de 1990, o
					setor agrícola brasileiro experimentou um período de
					expansão rápida, graças à implementação de políticas
					públicas favoráveis, à melhoria da infraestrutura rural e à
					investimentos em tecnologia e inovação.
				</p>
				<p>
					Essa expansão trouxe enormes benefícios para a economia
					brasileira. A agricultura passou a ser um dos principais
					pilares da economia nacional, gerando empregos e renda para
					milhões de pessoas, especialmente nas regiões rurais. Além
					disso, a safra brasileira contribuiu para a redução da
					pobreza e do desemprego em áreas rurais.
				</p>
				<p>
					A produção agrícola também desempenhou um papel fundamental
					na redução da dependência externa de alimentos, tornando o
					Brasil mais autossuficiente e menos vulnerável às flutuações
					no mercado internacional. Isso permitiu que a economia
					brasileira se diversificasse e se tornasse mais resistente
					às crises globais.
				</p>
				<p>
					Ainda mais importante, o avanço da safra brasileira trouxe
					melhorias significativas na segurança alimentar do país. A
					produção de alimentos saudáveis e nutricionais aumentou,
					permitindo que a população brasileira tenha acesso a uma
					variedade maior de alimentos frescos e orgânicos.
				</p>
			</div>
		</article>
	);
};
