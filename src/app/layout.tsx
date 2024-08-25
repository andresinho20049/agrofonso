import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@onion/components/client/navbar/navbar";
import { FooterComponent } from "@onion/components/server/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Onion Garden",
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
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<header>
					<NavBar />
				</header>
				<main>{children}</main>
				<footer>
					<FooterComponent />
				</footer>
			</body>
		</html>
	);
}
