import { AxiosInstance } from "@/config";

export const getSubjectsByGroupId = async (groupId: string) => {
	const { data } = await AxiosInstance.get(`/subjects/bygroupId/${groupId}`);

	return data;
};
