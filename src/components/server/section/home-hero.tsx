import { ContactButton } from '@onion/components/client/navbar/contact';
import {
  ShowcaseImageWithTextSimple,
  ShowcaseImageWithTextSimpleType,
} from '../showcase/showcase-img-text-simple';

const showCases: ShowcaseImageWithTextSimpleType[] = [
  { imgSrc: '/icons/tractor-96.png', text: 'Equipamentos novos e modernos' },
  {
    imgSrc: '/icons/resource-64.png',
    text: 'Melhor aproveitamento dos recursos',
  },
  { imgSrc: '/icons/delivery-time-80.png', text: 'Melhor tempo de colheita' },
  { imgSrc: '/icons/farmer-100.png', text: 'Time altamente qualificado' },
];

export const HomeHero = () => {
  return (
    <section className='relative h-64 w-full lg:h-96'>
      <div className='absolute inset-0 opacity-30'>
        <img
          src='/img/cebola_caminhao.jpeg'
          alt='Background Image'
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='absolute inset-9 flex flex-col items-start justify-end'>
        <div className='mb-4 md:mb-0 md:w-1/2'>
          <h1 className='text-start'>Agrofonso</h1>
          <h2 className='text-start text-lg lg:text-2xl'>
            Sementes de qualidade, raízes fortes.
            <br />
            Cultivando o futuro, desde a Bahia com sabor e qualidade, em todo o
            mundo.
          </h2>
        </div>
        <div className='my-4 hidden w-full flex-wrap gap-2 lg:flex'>
          {showCases.map((sc) => (
            <ShowcaseImageWithTextSimple
              key={sc.imgSrc}
              imgSrc={sc.imgSrc}
              text={sc.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
