export const FeatureSection = () => {
  return (
    <section className='mx-auto max-w-screen-2xl px-10 py-10 lg:px-0'>
      <div className='mx-auto max-w-xl'>
        <p className='text-center text-sm font-bold uppercase tracking-widest text-primary'>
          Nossa produção é sustentável e respeita o meio ambiente
        </p>

        <h2>Somos referência na Bahia</h2>
      </div>

      <div className='mt-8 grid grid-cols-1 items-center gap-x-4 gap-y-6 sm:mt-16 lg:grid-cols-5'>
        <div className='space-y-8 lg:col-span-2 lg:space-y-12 lg:pr-16 xl:pr-24'>
          <FeatureItem
            icon='/icons/filter.svg'
            title='Sementes de alta qualidade, raízes fortes'
            text='Nossa seleção de qualidade vem desde a escolha
								das sementes, e esse funil garante uma melhor
								colheita e cultivo'
          />
          <FeatureItem
            icon='/icons/code.svg'
            title='Estamos digitalizando'
            text='Nunca é tarde para aprender, e seguimos
								evoluindo com a construção da nossa plataforma,
								nela construiremos uma conexão simples e segura
								entre nossos clientes e fornecedores'
          />
          <FeatureItem
            icon='/icons/heart.svg'
            title='Cultive amor e carinho em cada refeição'
            text='Faça parte do movimento que prioriza qualidade e sabor nos alimentos, compre produtos agrícolas de alta qualidade, feitos com dedicação e cuidado.'
          />
        </div>

        <div className='transform transition duration-500 hover:scale-110 lg:col-span-3'>
          <img
            alt='Referência na Bahia'
            src='/img/tomate_showcase.jpeg'
            className='w-full rounded-xl shadow-2xl shadow-black'
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
    <div className='flex transform items-start gap-4 transition duration-500 hover:scale-110'>
      <img alt={title} src={icon} className='h-9 w-9 flex-shrink-0' />
      <div>
        <h3>{title}</h3>
        <p className='text-start tracking-wider'>{text}</p>
      </div>
    </div>
  );
};
