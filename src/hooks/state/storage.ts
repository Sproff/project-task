import { TStoreState } from "@/types/storeState";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useStoreState = create<TStoreState>()(
	devtools(
		persist(
			(set) => ({
				classId: {
					_id: "",
				},
				subjectId: "",
				setClassId: (classId) => set({ classId }),
				setSubjectId: (subjectId) => set({ subjectId }),
			}),
			{
				name: "classData",
			}
		)
	)
);
