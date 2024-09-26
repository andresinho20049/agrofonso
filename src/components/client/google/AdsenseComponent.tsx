"use client";

import Script from "next/script";
import { ReactNode, useEffect } from "react";

interface IAdsComponent {
	children: ReactNode;
}

export type AdsModelsType =
	| "horizontal"
	| "vertical"
	| "square"
	| "square-fixed"
	| "article"
	| "multi";

const AdsComponent = ({ children }: IAdsComponent) => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {}
	}, []);

	return <div>{children}</div>;
};
export const AdsenseVerticalComponent = () => {
	return (
		<AdsComponent>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-client={process.env.ADS_GID}
				data-ad-slot="6265854667"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</AdsComponent>
	);
};

export const AdsenseMultiComponent = () => {
	return (
		<AdsComponent>
			<ins
				className="adsbygoogle"
				style={{ display: "block" }}
				data-ad-format="autorelaxed"
				data-ad-client={process.env.ADS_GID}
				data-ad-slot="4939560048"
			></ins>
		</AdsComponent>
	);
};
