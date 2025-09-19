import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Header />

				<main className="">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
