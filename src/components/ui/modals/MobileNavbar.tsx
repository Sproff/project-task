import { Box } from "@chakra-ui/react";
import { CustomButton } from "../buttons/CustomButton";
import { CustomSelect } from "../forms/CustomSelect";
import { convertToSelectArray } from "@/utils/helpers";
import { CustomInput } from "../forms/CustomInput";
import { RiSearchLine } from "react-icons/ri";

const MobileNavbar = ({ isHomePage }: { isHomePage?: boolean }) => {
	return (
		<Box
			bg="brand.dark300"
			h="100%"
			pos="fixed"
			top="5.9rem"
			left="0"
			w="100%"
			zIndex="99"
		>
			<Box
				bg="brand.white200"
				mt="0rem"
				p="4rem 2rem"
				w="100%"
				borderBottomLeftRadius=".6rem"
				borderBottomRightRadius=".6rem"
			>
				<Box
					justifyContent="space-between"
					fontSize="1.7rem"
					fontFamily="circular"
					fontWeight="500"
				>
					{!isHomePage && (
						<Box mx="auto" w="100%" columnGap={"1.5rem"}>
							<Box w="100%">
								<CustomSelect
									defaultValue={{ label: "Class", value: "Class" }}
									placeholder="Class"
									options={convertToSelectArray([])}
									isDisabled={false}
									onChange={() => {}}
								/>
							</Box>

							<Box w="100%" mt="2rem">
								<CustomInput
									{...{
										id: "searchText",
										placeholder: "Search topic, subject, class",
										type: "text",
										borderColor: "brand.dark100",
										borderColorFocus: "brand.dark100",
										searchIcon: <RiSearchLine />,
									}}
								/>
							</Box>
						</Box>
					)}

					<Box mt="2.5rem">
						<CustomButton
							{...{
								text: "Login",
								py: ["2rem", "2rem"],
								px: "2rem",
								border: ".15rem solid",
								borderHover: ".15rem solid",
								borderColor: "brand.white100",
								borderColorHover: "brand.dark200",
								bg: "brand.white100",
								color: "brand.dark200",
								borderRadius: "1.5rem",
							}}
						/>

						<Box mt="2rem">
							<CustomButton
								{...{
									text: "Sign up",
									py: ["2rem", "2rem"],
									px: "4.5rem",
									border: ".15rem solid",
									borderColor: "dark100",
									bg: "brand.green100",
									color: "brand.dark200",
									boxShadow: "-2px 3px 0px 0px #292A2F",
									borderRadius: "1.5rem",
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export { MobileNavbar };
