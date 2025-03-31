import { Children, Element } from "@/lib/types"
import { Metadata } from "next"
import "@css/globals.css";

export const metadata: Metadata = {
	title: {
		default: "Card Karn",
		template: "%s | Card Karn",
	},
	description: "Card Karn",
};

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};