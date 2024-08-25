"use client";

import { InstagramEmbed, InstagramEmbedProps } from "react-social-media-embed";

export type InstragramEmbedCustomType = InstagramEmbedProps & {};

export const InstragramEmbedCustom = ({
	url,
	width = 500,
	...props
}: InstragramEmbedCustomType) => {
	return (
		<div className="flex justify-center">
			<InstagramEmbed url={url} width={width} {...props} />
		</div>
	);
};
