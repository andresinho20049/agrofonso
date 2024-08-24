export const FeatureSection = () => {
	return (
		<section className="max-w-screen-2xl mx-auto py-10 px-10 lg:px-0">
			<div className="max-w-xl mx-auto text-center">
				<p className="text-sm tracking-widest text-green-700 font-bold uppercase">
					Nossa produção é sustentável e respeita o meio ambiente
				</p>

				<h2 className="mt-4 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">
					Somos referência na Bahia
				</h2>
			</div>

			<div className="grid items-center grid-cols-1 mt-8 gap-y-6 lg:grid-cols-5 sm:mt-16 gap-x-4">
				<div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
					<div className="flex items-start hover:scale-110 transform transition duration-500">
						<svg
							className="flex-shrink-0 text-green-500 w-9 h-9"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
							/>
						</svg>
						<div className="ml-5">
							<h3 className="text-xl font-semibold text-black dark:text-slate-50">
								Sementes de alta qualidade, raízes fortes
							</h3>
							<p className="mt-3 text-base text-gray-600 dark:text-slate-300">
								Nossa seleção de qualidade vem desde a escolha
								das sementes, e esse funil garante uma melhor
								colheita e cultivo.
							</p>
						</div>
					</div>

					<div className="flex items-start hover:scale-110 transform transition duration-500">
						<svg
							className="flex-shrink-0 text-blue-600 w-9 h-9"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<div className="ml-5">
							<h3 className="text-xl font-semibold text-black dark:text-slate-50">
								Estamos digitalizando
							</h3>
							<p className="mt-3 text-base text-gray-600 dark:text-slate-300">
								Nunca é tarde para aprender, e seguimos
								evoluindo com a construção da nossa plataforma,
								nela construiremos uma conexão simples e segura
								entre nossos clientes e forncedores.
							</p>
						</div>
					</div>

					<div className="flex items-start hover:scale-110 transform transition duration-500">
						<svg
							className="flex-shrink-0 text-red-500 w-9 h-9"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
						<div className="ml-5">
							<h3 className="text-xl font-semibold text-black dark:text-slate-50">
								Cultive amor e carinho em cada refeição.
							</h3>
							<p className="mt-3 text-base text-gray-600 dark:text-slate-300">
								Faça parte do movimento que prioriza qualidade e
								sabor nos alimentos, compre produtos agrícolas
								de alta qualidade, feitos com dedicação e
								cuidado.
							</p>
						</div>
					</div>
				</div>

				<div className="lg:col-span-3 hover:scale-110 transform transition duration-500">
					<img
						className="w-full rounded-xl shadow-xl"
						src="/img/tomate_showcase.jpeg"
						alt="Referência na Bahia"
					/>
				</div>
			</div>
		</section>
	);
};
