import { CustomInputProps } from "@/types/form";
import { Box, Input, Text } from "@chakra-ui/react";

const CustomInput = ({
	id,
	defaultValue,
	placeholder,
	type,
	borderColor,
	borderColorFocus,
	searchIcon,
	errorMessage,
	isDisabled,
}: CustomInputProps) => {
	return (
		<Box>
			<Box pos="relative">
				<Input
					id={id}
					defaultValue={defaultValue}
					border="1px solid #EAEAEA"
					borderRadius="1.5rem"
					placeholder={placeholder}
					type={type}
					py="2rem"
					pl="4rem"
					fontSize="1.6rem"
					isDisabled={isDisabled}
					bg="brand.white100"
					borderColor={borderColor}
					_placeholder={{
						fontFamily: "Andika",
						fontWeight: 400,
						fontSize: "1.4rem",
						color: "brand.gray100",
					}}
					_focus={{
						borderColor: borderColorFocus,
						boxShadow: "none",
					}}
					_hover={{
						borderColor: "none",
					}}
				/>

				<Box
					as="span"
					cursor="pointer"
					fontSize="1.9rem"
					pos="absolute"
					zIndex="2"
					top="1.2rem"
					left="1.5rem"
					fontWeight="700"
					color="brand.gray200"
				>
					{searchIcon}
				</Box>
			</Box>
			<Text color="brand.red100" fontSize="1.1rem" fontWeight="300" mt=".5rem">
				{errorMessage}
			</Text>
		</Box>
	);
};

export { CustomInput };
