export const convertToSelectArray = (
	arrayData = [],
	labelCallback = (item: any) => item.label,
	value: string
) => {
	if (!Array.isArray(arrayData)) {
		return [];
	}

	const newArrayData = [...arrayData].map((el: any) => ({
		...el,
		label: labelCallback(el),
		value: el[value],
	}));
	return newArrayData;
};
