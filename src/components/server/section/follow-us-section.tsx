import { InstragramEmbedCustom } from "@onion/components/client/instagram/instagram-embeded";
import { ReactNode } from "react";

export type FollowUsSectionType = {
	socialNetwork?: string;
	children: ReactNode;
};

export const FollowUsSection = () => {
	return (
		<section className="min-h-screen bg-neutral-900">
			<div className="max-w-screen-2xl mx-auto px-4 space-y-10">
				<div>
					<h1 className="flex items-center justify-center">
						Siga-nos em nossa rede
					</h1>
					<h2>
						Junte-se à jornada para descobrir as artes da
						agricultura sustentável!
					</h2>
				</div>

				<div className="hidden lg:grid grid-cols-3">
					<InstragramEmbedCustom
						url="https://www.instagram.com/p/C5uMLRzxQO5/"
						width={360}
					/>
					<InstragramEmbedCustom
						url="https://www.instagram.com/p/C6mvk6Nu4Td"
						width={360}
					/>
					<InstragramEmbedCustom
						url="https://www.instagram.com/p/C6Pcx07ui9p"
						width={360}
					/>
				</div>
				<InstragramEmbedCustom
					url="https://www.instagram.com/p/C6mvk6Nu4Td"
					width={"100%"}
					className="block lg:hidden"
				/>
			</div>
		</section>
	);
};
