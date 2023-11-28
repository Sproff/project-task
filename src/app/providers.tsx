"use client";

import { customTheme } from "@/styles/themes";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";
import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export const Providers = ({ children }: { children: React.ReactNode }) => {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate>
				<CacheProvider>
					<ChakraProvider theme={customTheme}>{children}</ChakraProvider>
				</CacheProvider>
			</Hydrate>
		</QueryClientProvider>
	);
};
