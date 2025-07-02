import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@onion/components/client/navbar/navbar";
import { FooterComponent } from "@onion/components/server/footer/footer";
import { ThemeProvider } from "@onion/context/ThemeContext";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Agrofonso",
	description:
		"Um site agro-tech trazendo as inovações do mundo digital unido as inovações do mundo agro, melhor qualidade de colheira e melhor cultivo faz com que sejamos referencia na qualidade dos nossos produtos.",
	keywords: [
		"onion",
		"garden",
		"agro",
		"cebola",
		"tomate",
		"roça",
		"colheita",
		"verduras",
		"Agrofonso"
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<Script
						id="ads-google-1"
						async
						src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.ADS_GID}`}
						crossOrigin="anonymous"
					/>
					<GoogleTagManager gtmId={process.env.GTMID || ""} />
					<GoogleAnalytics gaId={process.env.GAID || ""} />
					<header>
						<NavBar />
					</header>
					<main>{children}</main>
					<footer>
						<FooterComponent />
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
