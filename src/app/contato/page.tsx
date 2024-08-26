import { InstragramEmbedCustom } from "@onion/components/client/instagram/instagram-embeded";
import { WaveDiviver } from "@onion/components/server/divider/wave-divider";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

type LinkContatoPropsType = LinkProps & {
	imgSrc: string;
	label: string;
};

const LinkContato = ({
	href,
	imgSrc,
	label,
	...props
}: LinkContatoPropsType) => {
	return (
		<Link
			href={href}
			{...props}
			target="_blank"
			className="flex items-center gap-2"
		>
			<Image
				alt="Instagram"
				src={imgSrc}
				width={36}
				height={36}
				className="h-8 w-8"
			/>
			{label}
		</Link>
	);
};

export default function Contato() {
	return (
		<section>
			<div className="bg-second-light dark:bg-second-dark">
				<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 gap-8">
					<div className="w-full px-10 space-y-8">
						<h1>Contate-nos</h1>
						<p className="text-center">
							Sinta-se à vontade para entrar em contato conosco
							para quaisquer dúvidas ou assistência. Estamos aqui
							para ajudar!
						</p>

						<div className="grid grid-cols-2 justify-items-center space-x-8">
							<LinkContato
								href={"https://www.instagram.com/oniongarde/"}
								label="@OnionGarden"
								imgSrc="/icons/instagram.svg"
							/>
							<LinkContato
								href={
									"https://api.whatsapp.com/send?phone=557499734929"
								}
								label="Whatsapp"
								imgSrc="/icons/whatsapp.svg"
							/>
						</div>
						<div className="relative h-96">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.662486052182!2d-41.640613610463845!3d-11.744145732646672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7691390b2b71e85%3A0xd577c53150a55cea!2sCapivara!5e0!3m2!1sen!2sbr!4v1724560171938!5m2!1sen!2sbr"
								width="100%"
								height="100%"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="w-full h-full px-8">
						<InstragramEmbedCustom
							url="https://www.instagram.com/p/C5tUvP_LaC3/?img_index=2"
							width={420}
							captioned
							className="max-sm:hidden"
						/>
						<InstragramEmbedCustom
							url="https://www.instagram.com/p/C5tUvP_LaC3/?img_index=2"
							width={"100%"}
							captioned
							className="block md:hidden"
						/>
					</div>
				</div>
			</div>
			<WaveDiviver />
		</section>
	);
}
