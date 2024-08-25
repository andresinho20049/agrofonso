import Image from "next/image";

export const FeatureSection = () => {
	return (
		<section className="max-w-screen-2xl mx-auto py-10 px-10 lg:px-0">
			<div className="max-w-xl mx-auto">
				<p className="text-sm text-center tracking-widest text-green-700 font-bold uppercase">
					Nossa produção é sustentável e respeita o meio ambiente
				</p>

				<h2>Somos referência na Bahia</h2>
			</div>

			<div className="grid items-center grid-cols-1 mt-8 gap-y-6 lg:grid-cols-5 sm:mt-16 gap-x-4">
				<div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
					<FeatureItem
						icon="/icons/filter.svg"
						title="Sementes de alta qualidade, raízes fortes"
						text="Nossa seleção de qualidade vem desde a escolha
								das sementes, e esse funil garante uma melhor
								colheita e cultivo"
					/>
					<FeatureItem
						icon="/icons/code.svg"
						title="Estamos digitalizando"
						text="Nunca é tarde para aprender, e seguimos
								evoluindo com a construção da nossa plataforma,
								nela construiremos uma conexão simples e segura
								entre nossos clientes e forncedores"
					/>
					<FeatureItem
						icon="/icons/heart.svg"
						title="Cultive amor e carinho em cada refeição"
						text="Faça parte do movimento que prioriza qualidade e sabor nos alimentos, compre produtos agrícolas de alta qualidade, feitos com dedicação e cuidado."
					/>
				</div>

				<div className="lg:col-span-3 hover:scale-110 transform transition duration-500">
					<Image
						alt="Referência na Bahia"
						src="/img/tomate_showcase.jpeg"
						width={1600}
						height={1200}
						className="w-full rounded-xl shadow-xl"
					/>
				</div>
			</div>
		</section>
	);
};

type FeatureItemPropsType = {
	icon: string;
	title: string;
	text: string;
};

const FeatureItem = ({ icon, title, text }: FeatureItemPropsType) => {
	return (
		<div className="flex gap-4 items-start hover:scale-110 transform transition duration-500">
			<Image
				alt={title}
				src={icon}
				width={48}
				height={48}
				className="flex-shrink-0 h-9 w-9"
			/>
			<div>
				<h3>{title}</h3>
				<p className="text-start tracking-wider">{text}</p>
			</div>
		</div>
	);
};
