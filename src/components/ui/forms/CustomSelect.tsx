import { CustomSelectProps } from "@/types/form";
import RSelect from "react-select";
import { Box } from "@chakra-ui/react";
import { selectStyles, selectTheme } from "./selectStyles";

const CustomSelect = ({
	id,
	defaultValue,
	isMulti,
	onChange,
	options,
	placeholder,
	isDisabled,
	...otherProps
}: CustomSelectProps) => {
	const handleChange = (data: any) => {
		return onChange ? onChange(data) : data;
	};
	return (
		<Box w="full">
			<RSelect
				menuPlacement="auto"
				placeholder={placeholder}
				id={id}
				isMulti={isMulti}
				options={options}
				defaultValue={defaultValue}
				styles={selectStyles}
				theme={selectTheme}
				isDisabled={isDisabled}
				{...{ ...otherProps, onChange: handleChange }}
			/>
		</Box>
	);
};

export { CustomSelect };
