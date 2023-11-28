import { AxiosInstance } from "@/config";

export const getClassesGroups = async () => {
	const { data } = await AxiosInstance.get("/classes/groups");

	return data;
};
