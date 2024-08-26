export type ShowcaseImageWithTextSimpleType = {
	imgSrc: string;
	text: string;
};

export const ShowcaseImageWithTextSimple = ({
	imgSrc,
	text,
}: ShowcaseImageWithTextSimpleType) => {
	return (
		<div className="bg-main-light dark:bg-main-dark bg-opacity-40 dark:bg-opacity-30 rounded-md p-4 flex-1 group">
			<div className="px-4 transform transition duration-500 group-hover:scale-110">
				<div className="flex justify-center">
					<img src={imgSrc} className="w-12 mb-3" />
				</div>
				<h3 className="text-center">{text}</h3>
			</div>
		</div>
	);
};
