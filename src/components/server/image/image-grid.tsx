type ImageGridItemPropsType = {
  src: string;
  height?: number;
  width?: number;
  alt?: string;
};

export const ImageGridItem = ({
  alt = 'Agrofonso Grid',
  src,
  height = 1200,
  width = 1600,
}: ImageGridItemPropsType) => {
  return (
    <img
      src={src}
      alt={alt}
      className='h-full w-full transform rounded-xl object-cover object-center shadow-lg shadow-black transition duration-500 hover:scale-95'
    />
  );
};
