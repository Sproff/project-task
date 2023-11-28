import { getClassesGroups } from "@/queries/classes";
import { useQuery } from "react-query";

export const useGetClassesGroups = () => {
	return useQuery({
		queryKey: ["getClassesGroups"],
		queryFn: () => getClassesGroups(),
		retry: 2,
	});
};
