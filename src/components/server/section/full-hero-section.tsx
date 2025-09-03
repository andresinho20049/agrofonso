import { ReactNode } from 'react';
import { LinkAppearanceButton } from '../link/link-appearance-button';

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
    <section className='mx-auto flex h-screen max-w-screen-2xl flex-wrap'>
      <div className='flex h-full w-full flex-col justify-between lg:w-8/12'>
        <section className='flex h-full items-center px-4 lg:mt-0'>
          <div className='w-full'>
            {title}
            <div className='my-4 h-2 w-36 bg-primary'></div>
            <p className='text-md mb-5 lg:mb-16 lg:text-xl'>{msg}</p>
            <div className='w-56'>
              {urlLink && (
                <LinkAppearanceButton href={urlLink}>
                  <span className='sr-only'>{textLink}</span>
                  {textLink || 'Learn more'}
                </LinkAppearanceButton>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className='hidden h-full w-4/12 items-center px-2 lg:flex'>
        <img
          src={imgSrc}
          alt='Ilustrate Image'
          className='h-5/6 object-cover object-center'
        />
      </div>
    </section>
  );
};
