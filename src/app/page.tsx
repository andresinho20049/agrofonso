import { InstragramEmbedCustom } from "@onion/components/client/instagram/instagram-embeded";
import { DividerSimple } from "@onion/components/server/divider/divider-simple";
import {
	WaveDiviver,
	WaveDiviverInvert,
} from "@onion/components/server/divider/wave-divider";
import { FeatureSection } from "@onion/components/server/section/feature-section";
import { FollowUsSection } from "@onion/components/server/section/follow-us-section";
import { FullHeroSection } from "@onion/components/server/section/full-hero-section";
import { HomeHero } from "@onion/components/server/section/home-hero";
import { ResumeWithImageGridSection } from "@onion/components/server/section/resume-with-image-grid-section";

export default function Home() {
	return (
		<section>
			<HomeHero />
			<FeatureSection />
			<WaveDiviverInvert />
			<ResumeWithImageGridSection />
			<WaveDiviver />
			<FullHeroSection
				msg="Nossa experiência em cultivo é a garantia da melhor qualidade para você e sua família."
				title={
					<h2 className="text-start text-stone-50 text-3xl lg:text-5xl">
						Faça parte do movimento que prioriza{" "}
						<strong className="text-3xl lg:text-5xl">
							qualidade e sabor
						</strong>{" "}
						nos alimentos
					</h2>
				}
				urlLink="/contato"
				textLink="Conheça os produtos"
				imgSrc="/img/cebola_corredor.jpg"
			/>
			<WaveDiviverInvert />
			<FollowUsSection />
			<WaveDiviver />
		</section>
	);
}
