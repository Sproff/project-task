import { getLessonsBySubjectId } from "@/queries/lessons";
import { useQuery } from "react-query";

export const useGetLessonsBySubjectId = (subjectId: string) => {
	return useQuery({
		queryKey: ["getLessonsBySubjectId", subjectId],
		queryFn: () => getLessonsBySubjectId(subjectId),
		retry: 2,
	});
};
