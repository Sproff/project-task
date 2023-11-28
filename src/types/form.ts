import React, { ReactNode } from "react";

export type CustomInputProps = {
	id: string;
	defaultValue?: string;
	placeholder: string;
	type: string;
	borderColor?: string;
	borderColorFocus?: string;
	searchIcon?: ReactNode;
	isDisabled?: boolean;
	errorMessage?: string | undefined;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export type CustomSelectProps = {
	[name: string]: any;
	isDisabled?: boolean;
};

export type TSelectValue = {
	value: string;
	label: string;
	__isNew__?: boolean;
	data?: any;
};
