export type ShowcaseImageWithTextSimpleType = {
  imgSrc: string;
  text: string;
};

export const ShowcaseImageWithTextSimple = ({
  imgSrc,
  text,
}: ShowcaseImageWithTextSimpleType) => {
  return (
    <div className='group flex-1 rounded-md bg-main-light bg-opacity-40 p-4 dark:bg-main-dark dark:bg-opacity-30'>
      <div className='transform px-4 transition duration-500 group-hover:scale-110'>
        <div className='flex justify-center'>
          <img src={imgSrc} className='mb-3 w-12' />
        </div>
        <h3 className='text-center'>{text}</h3>
      </div>
    </div>
  );
};
