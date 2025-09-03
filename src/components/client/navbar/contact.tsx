import Image from 'next/image';

export type ContactButtonType = {
  imgSrc: string;
  text: string;
};

export const ContactButton = ({ imgSrc, text }: ContactButtonType) => {
  return (
    <div className='w-30 group flex h-10 items-center rounded-md border-2 border-blue-500 p-2 hover:border-cyan-500'>
      <img alt={text} src={imgSrc} className='group-hover:brightness-110' />
      <span className='group-hover:text-cyan-500'>{` ${text}`}</span>
    </div>
  );
};
