import Image from "next/image";

type ImageGridItemPropsType = {
	src: string;
	height?: number;
	width?: number;
	alt?: string;
};

export const ImageGridItem = ({
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
			className="h-full w-full object-cover object-center rounded-xl hover:scale-95 transform transition duration-500 shadow-lg shadow-black"
		/>
	);
};
