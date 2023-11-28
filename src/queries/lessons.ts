import { AxiosInstance } from "@/config";

export const getLessonsBySubjectId = async (subjectId: string) => {
	const { data } = await AxiosInstance.get(`/lessons/bysubject/${subjectId}`);

	return data;
};
