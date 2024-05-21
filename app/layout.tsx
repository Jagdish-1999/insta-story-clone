import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ContextProvider from "@/providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Instagram stories clone",
	description: "Instagram stories simplified version",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning>
				<ContextProvider>{children}</ContextProvider>
			</body>
		</html>
	);
}
