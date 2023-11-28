"use client";

import Link from "next/link";
import { IMenuLinkProps } from "@/types/layout";
import { dashboardNavigationData } from "@/utils/dashboard";
import { Box, HStack, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
	return (
		<Box
			h="100vh"
			w="14%"
			bg="brand.dark100"
			p={["2rem", "2rem", "8.8rem 2rem", "8rem 2rem"]}
			pos="fixed"
		>
			{dashboardNavigationData?.map((navigation, idx) => (
				<Box key={idx}>
					<SidebarMenuLinks {...{ ...navigation }} />
				</Box>
			))}
		</Box>
	);
};

export { DashboardSidebar };

export const SidebarMenuLinks = ({
	text,
	path = "#",
	iconImg,
}: IMenuLinkProps) => {
	const pathname = usePathname();

	const activeTab = pathname.split("/")[2] === path.split("/")[2];

	return (
		<Box w="100%" mb="1.4rem">
			<Link href={path}>
				<HStack
					p={iconImg ? "1rem 2rem" : "1rem 4.7rem"}
					bgColor={activeTab ? "brand.green200" : "none"}
					rounded={activeTab ? "1rem" : "none"}
					color={activeTab ? "brand.dark200" : "brand.white100"}
					spacing={5}
					fontWeight="400"
					fontSize="1rem"
					_hover={{
						bgColor: activeTab ? "brand.green200" : "none",
						color: activeTab ? "brand.dark200" : "brand.white100",
					}}
				>
					<Box
						sx={{
							"#svgIcon": {
								stroke: activeTab ? "brand.dark200" : "",
								fill: activeTab ? "brand.dark200" : "",
								borderColor: activeTab ? "brand.dark200" : "",
							},
						}}
						dangerouslySetInnerHTML={{ __html: iconImg || "" }}
					/>
					<Text fontSize="1.6rem" fontWeight="600">
						{text}
					</Text>
				</HStack>
			</Link>
		</Box>
	);
};
