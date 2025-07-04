import {
	AdsenseMultiComponent,
	AdsenseVerticalComponent,
} from "@onion/components/client/google/AdsenseComponent";
import { ImageGridItem } from "@onion/components/server/image/image-grid";
import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
	return (
		<section className="min-h-dvh">
			<div className="max-w-screen-2xl mx-auto mt-10 mb-24 flex max-sm:flex-col gap-4">
				<div className="w-full md:w-1/2 grid flex-shrink-0 gap-2 grid-cols-2 md:grid-cols-4 max-sm:px-8">
					<div className="max-sm:col-span-2 col-span-3">
						<ImageGridItem src="/img/na_roca.jpg" />
					</div>
					<div className="col-span-1 row-span-3">
						<ImageGridItem src="/img/tratozera-min.gif" />
					</div>
					<div className="col-span-1">
						<ImageGridItem src="/img/macro_photo.jpg" />
					</div>
					<div className="max-sm:hidden col-span-2">
						<ImageGridItem src="/img/cebola_caminhao.jpeg" />
					</div>
					<div className="max-sm:hidden col-span-2">
						<ImageGridItem src="/img/cebola_cesta.jpg" />
					</div>
					<div className="max-sm:row-span-2 col-span-1">
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
						<h2 className="max-sm:text-2xl">
							Priorize a qualidade e o sabor com nossos produtos
							agrícolas de alta qualidade
						</h2>
						<h3>Nossa Essência: Da Terra da Família Agrofonso</h3>
						<p>
							Bem-vindos à Agrofonso! Somos a _agricultura
							familiar_ que, com as mãos na terra de Canarana,
							Bahia, transformou um pequeno sonho em uma colheita
							de sucesso. Desde o início, nossa paixão por
							cultivar e a dedicação ao solo baiano nos
							impulsionam a trazer o melhor da fazenda direto para
							a sua mesa, construindo um legado de trabalho e
							prosperidade.
						</p>
						<h3>
							Nossa Jornada: Do Coração da Bahia para a Mesa do
							Brasileiro
						</h3>
						<p>
							Em Canarana, nos tornamos referência na produção de
							cebolas, um verdadeiro orgulho para nossa família e
							nossa região. Mas nossa vocação vai além. Com a
							experiência de mais de uma década e o mesmo cuidado
							que cultivamos nossas primeiras sementes, hoje
							produzimos uma vasta gama de culturas. Não somos
							apenas produtores de cebola, tomate, melancia e
							feijão, mas sim parte vital do mercado de
							agronegócio que impulsiona o Brasil para frente,
							garantindo uma colheita diversificada e de qualidade
							que chega à mesa de milhões de brasileiros.
						</p>

						<h3>Mãos que Plantam, Mentes que Inovam</h3>
						<p>
							Acreditamos que o futuro do campo se constrói com a
							sabedoria de gerações e a força da tecnologia. Por
							isso, no último ano, investimos pesado em maquinário
							moderno, o que nos permitiu dobrar nossa produção e
							aprimorar ainda mais a qualidade de tudo o que
							cultivamos. É o nosso jeito de honrar o passado e
							semear o progresso, sempre buscando a excelência em
							cada safra.
						</p>
						<h3>
							O Sabor da Transformação: Nossos Tomates, Valor
							Agregado
						</h3>
						<p>
							Com a paixão por inovar e agregar valor à nossa
							produção, estamos agora focados em um novo
							horizonte: a extração e comercialização dos nossos
							tomates. Queremos levar o sabor autêntico e a
							qualidade Agrofonso ainda mais longe, transformando
							cada fruto em um produto que traga praticidade e o
							frescor do campo para a sua rotina, com a mesma
							dedicação que você já conhece.
						</p>

						<h3>
							Nosso Compromisso: Qualidade que Cultivamos Juntos
						</h3>

						<p>
							Para a família Agrofonso, cada produto que sai da
							nossa fazenda carrega o compromisso com a qualidade,
							a sustentabilidade e, acima de tudo, a satisfação de
							quem confia no nosso trabalho. Cuidamos da terra com
							respeito e paixão para que ela continue cuidando de
							nós e de você, fortalecendo a cadeia produtiva e o
							agronegócio nacional.
						</p>

						<h3>Faça parte da Nossa Família Agrofonso!</h3>
						<p>
							Siga nossa jornada, conheça os bastidores da vida
							rural e descubra receitas deliciosas com nossos
							produtos! Acompanhe-nos no Instagram
							<Link
								href="https://www.instagram.com/agrofonsoo/"
								target="_blank"
								className="text-blue-500 dark:text-cyan-500 hover:underline"
							>
								{" @agrofonso "}
							</Link>
							e cresça com a gente!
						</p>
					</div>
				</div>
			</div>
			<div className="max-w-screen-2xl mx-auto p-8 flex justify-between align-middle">
				<div className="w-3/6 h-2/6">
					<AdsenseMultiComponent />
				</div>
				<div className="w-2/6 h-2/6">
					<AdsenseVerticalComponent />
				</div>
			</div>
		</section>
	);
}
