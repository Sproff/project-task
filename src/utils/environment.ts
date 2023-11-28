export const getBaseUrl = () => {
	const isNotDevelopment = process.env.NODE_ENV !== "development";

	if (isNotDevelopment) {
		return (
			process.env.NEXT_PUBLIC_PROD_BASE_URL ||
			"https://afrilearn-api-staging.up.railway.app/v1"
		);
	} else {
		return process.env.NEXT_PUBLIC_DEV_BASE_URL || "http://localhost:3000";
	}
};
