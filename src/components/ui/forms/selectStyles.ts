import { customColors as colors } from "@/styles/themes/foundation/colors";
import { TSelectValue } from "@/types/form";
import { StylesConfig, GroupBase } from "react-select";

export const selectStyles: Partial<
	StylesConfig<TSelectValue, false, GroupBase<TSelectValue>>
> = {
	container: (provided) => ({
		...provided,
		height: "4rem",
		borderColor: `${colors.brand.dark100} !important`,
		outline: "none",
		position: "relative",
		zIndex: 990,
	}),
	control: (provided) => ({
		...provided,
		border: "1px solid hsla(0, 0%, 88%, 1)",
		borderColor: `${colors.brand.dark100} !important`,
		borderRadius: "1.5rem",
		fontFamily: "Andika",
		fontSize: "1.4rem",
		fontWeight: 700,
		outline: "none",
		boxShadow: "none !important",
		minHeight: "4.2rem",
		color: `${colors.brand.dark100} !important`,
		cursor: "pointer",
	}),

	indicatorsContainer: (provided) => ({
		...provided,
		color: `${colors.brand.dark100} !important`,
	}),

	indicatorSeparator: (provided) => ({
		...provided,
		display: "none",
	}),

	placeholder: (provided) => ({
		...provided,
		color: colors.brand.dark100,
		fontFamily: "Andika",
		fontSize: "1.4rem",
		fontWeight: 700,
	}),

	menu: (provided) => ({
		...provided,
		marginTop: "1rem",
	}),
};

export const selectTheme = (theme: any) => ({
	...theme,
	colors: {
		...theme.colors,
		primary: colors.brand.dark100,
	},
});
