import { Children, Element } from "@/lib/types"

export default function RootLayout({ children }: Children): Element {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}