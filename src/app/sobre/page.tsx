import Image from "next/image";
import Link from "next/link";

type ImageGridItemPropsType = {
	src: string;
	height?: number;
	width?: number;
	alt?: string;
};

const ImageGridItem = ({
	alt = "Onion garden Grid",
	src,
	height = 1200,
	width = 1600,
}: ImageGridItemPropsType) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className="h-full w-full object-cover object-center rounded-xl hover:scale-95 transform transition duration-500"
		/>
	);
};

export default function Sobre() {
	return (
		<section className="min-h-dvh">
			<div className="max-w-screen-2xl mx-auto mt-10 mb-24 flex max-sm:flex-col gap-4">
				<div className="w-full md:w-1/2 grid flex-shrink-0 gap-2 grid-cols-2 md:grid-cols-4 max-sm:px-8">
					<div className="max-sm:hidden col-span-3">
						<ImageGridItem src="/img/na_roca.jpg" />
					</div>
					<div className="col-span-1 row-span-3">
						<ImageGridItem src="/img/tratozera-min.gif" />
					</div>
					<div className="col-span-1">
						<ImageGridItem src="/img/macro_photo.jpg" />
					</div>
					<div className="col-span-1 md:col-span-2">
						<ImageGridItem src="/img/cebola_caminhao.jpeg" />
					</div>
					<div className="col-span-1 md:col-span-2">
						<ImageGridItem src="/img/cebola_cesta.jpg" />
					</div>
					<div className="max-sm:hidden col-span-1">
						<ImageGridItem src="/img/coleta_cebola.jpeg" />
					</div>
				</div>
				<div className="flex-1 max-sm:order-first">
					<div className="h-full w-full flex flex-col justify-center items-center space-y-4 px-8 about-container">
						<h1>
							<Image
								alt="Logo"
								src={"/logo/Logo.png"}
								width={2100}
								height={1500}
								className="w-64 md:w-96"
							/>
						</h1>
						<h2>
							Priorize a qualidade e o sabor com nossos produtos
							agrícolas de alta qualidade
						</h2>
						<h3>Nossa origem</h3>
						<p>
							Bem-vindos à Onion Garden, onde paixão e dedicação
							se unem para levar você os melhores produtos frescos
							da nossa fazenda em Capivara, Bahia. Nossa jornada
							começou como um grupo pequeno de agricultores com
							uma visão compartilhada: cultivar um futuro melhor
							para nossa comunidade.
						</p>

						<h3>De Semente a Mesa</h3>

						<p>
							Nossa história começa com a seleção de sementes de
							alta qualidade, cuidadosamente escolhidas para
							garantir o melhor resultado possível. Com cada passo
							do dia, nosso time trabalha incansavelmente para
							nutrir essas sementes nas frescas e deliciosas
							Cebolas (onions), Tomates (tomatoes) e Feijões
							(beans) que você jamais experimentou.
						</p>

						<h3>Mais Do Que Uma Fazenda</h3>

						<p>
							Enquanto estamos orgulhosos de nossos produtos
							básicos, não paramos lá. Estamos sempre procurando
							maneiras de inovar e melhorar, seja através de
							variedades de culturas novas ou práticas agrícolas
							sustentáveis. Nossa compromisso com qualidade e
							satisfação do cliente é incansável, e estamos
							ansiosos para compartilhar nossa jornada com você.
						</p>

						<h3>Junte-se à Comunidade da Onion Garden</h3>

						<p>
							Fique atualizado sobre as últimas notícias, visuais
							detrás das cenas da vida rural e receitas deliciosas
							que destacam nossos produtos!
							<br />
							Siga-nos no Instagram
							<Link
								href={"https://www.instagram.com/oniongarde/"}
								target="_blank"
							>
								{` @oniongarde `}
							</Link>
							e seja parte de nossa comunidade em crescimento!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
