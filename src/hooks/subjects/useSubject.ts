import { getSubjectsByGroupId } from "@/queries/subjects";
import { useQuery } from "react-query";

export const useGetSubjectsByGroupId = (groupId: string) => {
	return useQuery({
		queryKey: ["getSubjectsByGroupId", groupId],
		queryFn: () => getSubjectsByGroupId(groupId),
		retry: 2,
	});
};
