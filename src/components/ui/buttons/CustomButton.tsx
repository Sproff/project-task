import { CustomButtonProps } from "@/types/button";
import { Box, Button, Icon } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";

const CustomButton = ({
	w,
	py,
	px,
	color,
	bg,
	bgHover,
	borderColorHover,
	boxShadow,
	border,
	borderHover,
	borderColor,
	borderRadius,
	fontSize,
	text,
	isLoading,
	isDisabled,
}: CustomButtonProps) => {
	return (
		<Box>
			<Button
				w={w || "100%"}
				py={py || "2rem"}
				px={px}
				color={color || "#fff"}
				bg={bg || "brand.green100"}
				borderRadius={borderRadius}
				boxShadow={boxShadow}
				border={border}
				borderColor={borderColor}
				type="submit"
				cursor="pointer"
				fontSize={fontSize || "1.4rem"}
				fontFamily="Andika"
				fontWeight="700"
				isLoading={isLoading}
				isDisabled={isDisabled}
				_hover={{
					border: borderHover,
					bg: bgHover,
					borderColor: borderColorHover,
				}}
				_focus={{
					borderColor: "none",
					boxShadow: "none",
				}}
			>
				{text}{" "}
				<Icon
					cursor="pointer"
					color="brand.dark200"
					fontSize="1.5rem"
					ml="1rem"
					as={FaPlus}
				/>
			</Button>
		</Box>
	);
};

export { CustomButton };
