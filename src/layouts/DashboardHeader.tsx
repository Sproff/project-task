"use client";

import { CustomInput } from "@/components/ui/forms/CustomInput";
import { CustomSelect } from "@/components/ui/forms/CustomSelect";
import { convertToSelectArray } from "@/utils/helpers";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { CustomButton } from "@/components/ui/buttons/CustomButton";
import { useGetClassesGroups } from "@/hooks/classes/useClasses";
import { useEffect, useState } from "react";
import { useStoreState } from "@/hooks/state/storage";
import { ClassIdProps } from "@/types/storeState";

const DashboardHeader = () => {
	return (
		<Box>
			<Box
				bg="brand.white100"
				borderBottom="2px solid"
				borderColor="brand.gray100"
				pos="fixed"
				zIndex={99}
				w="100%"
			>
				<Box p={["2rem", "2rem", "1rem", "1rem 1.5rem"]}>
					<Flex
						align="center"
						justifyContent="space-between"
						w="100%"
						gap="2rem"
					>
						<Link href="/">
							<Flex align="center" columnGap="1rem">
								<Image
									src="/assets/icons/afrilearn-classroom-logo.svg"
									height={30}
									width={30}
									alt="Header logo"
								/>

								<Flex align="center" columnGap=".5rem">
									<Text
										fontSize={["1.8rem", "2.1rem"]}
										fontWeight="800"
										color="brand.dark200"
									>
										Classnotes
									</Text>
								</Flex>
							</Flex>
						</Link>

						<Flex align="center" columnGap="1rem" cursor="pointer">
							<Image
								src="/assets/icons/profile-icon.svg"
								height={40}
								width={40}
								alt="Profile icon"
							/>

							<Text fontFamily="Andika">Joshua</Text>
							<Icon as={IoIosArrowForward} />
						</Flex>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};

const SubDashboardHeader = () => {
	const [selectedClass, setSelectedClass] = useState<ClassIdProps>();
	const { data, isLoading } = useGetClassesGroups();
	const { setClassId } = useStoreState((state) => state);

	useEffect(() => {
		if (selectedClass) {
			setClassId(selectedClass);
		}
	}, [selectedClass, setClassId]);

	return (
		<Box
			w="86%"
			ml="auto"
			bg="brand.gray500"
			borderBottom="1px solid"
			borderColor="brand.dark100"
			pos="fixed"
			top="6.2rem"
			right="0"
			zIndex={99}
		>
			<Box p="1.2rem 1.5rem .85rem">
				<Flex align="center" justifyContent="space-between" w="100%" gap="2rem">
					<Text
						fontSize={["1.8rem", "3rem"]}
						fontWeight="800"
						color="brand.dark200"
					>
						Notes
					</Text>

					<Flex w="62%" columnGap={"1.5rem"}>
						<Box w={["20%", "20%", "20%", "40%", "25%"]}>
							<CustomSelect
								{...{
									id: "class",
									value: selectedClass,
									options: convertToSelectArray(
										data?.data,
										({ name }) => name,
										"_id"
									),
									onChange: (value: ClassIdProps) => setSelectedClass(value),
									placeholder: "Primary",
									isDisabled: isLoading,
								}}
							/>
						</Box>

						<Box w={["20%", "20%", "20%", "40%", "25%"]}>
							<CustomSelect
								{...{
									id: "class",
									value: "1st Term",
									options: convertToSelectArray([], (item) => item.name, "_id"),
									onChange: () => {},
									placeholder: "1st Term",
								}}
							/>
						</Box>

						<Box w={["70%", "70%", "80%", "100%", "55%"]}>
							<CustomInput
								{...{
									id: "searchText",
									placeholder: "Search",
									type: "text",
									borderColor: "brand.dark100",
									borderColorFocus: "brand.dark100",
									searchIcon: <RiSearchLine />,
								}}
							/>
						</Box>

						<Box>
							<CustomButton
								{...{
									text: "Create note ",
									py: ["2rem", "2rem"],
									px: "2rem",
									border: ".1rem solid",
									borderHover: ".15rem solid",
									borderColor: "brand.dark100",
									bg: "brand.green200",
									color: "brand.dark200",
									borderRadius: "1.5rem",
								}}
							/>
						</Box>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export { DashboardHeader, SubDashboardHeader };
