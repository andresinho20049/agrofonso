export type ShowcaseImageWithTextSimpleType = {
	imgSrc: string;
	text: string;
};

export const ShowcaseImageWithTextSimple = ({
	imgSrc,
	text,
}: ShowcaseImageWithTextSimpleType) => {
	return (
		<div className="md:w-1/4 sm:w-1/2 bg-black p-2 rounded-md bg-opacity-20">
			<div className="px-4 transform transition duration-500 hover:scale-110">
				<div className="flex justify-center">
					<img src={imgSrc} className="w-12 mb-3" />
				</div>
				<h2 className="text-md font-regular text-white select-none">
					{text}
				</h2>
			</div>
		</div>
	);
};
