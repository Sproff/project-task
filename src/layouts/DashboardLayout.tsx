import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader, SubDashboardHeader } from "./DashboardHeader";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Box>
			<Box>
				<DashboardHeader />

				<Flex justify="space-between">
					<DashboardSidebar />

					<SubDashboardHeader />
					<Box w="86%" ml="auto" mt="15rem">
						{children}
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export { DashboardLayout };
