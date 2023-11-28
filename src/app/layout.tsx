import type { Metadata } from "next";
import { Providers } from "./providers";
import React from "react";

export const metadata: Metadata = {
	title: "Afilearn Assessment",
	description: "Frontend Task",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
