"use client";

import { useGetLessonsBySubjectId } from "@/hooks/lessons/useLessons";
import { useHydratedStoreState } from "@/hooks/state/hydrated";
import { useGetSubjectsByGroupId } from "@/hooks/subjects/useSubject";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { CustomTableLayout } from "@/layouts/TableLayout";
import { LessonProps } from "@/types/lesson";
import { TableProps } from "@/types/tableDefinitions";
import { Box, Flex, HStack, Img, Text } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";

const Notes = () => {
	const classData = useHydratedStoreState("classId");
	const { data: subjectData } = useGetSubjectsByGroupId(classData?._id);
	const [selectedSubjectId, setSelectedSubjectId] = useState<string>("");
	const { data: lessonData } = useGetLessonsBySubjectId(selectedSubjectId);

	const slicedLessonData = lessonData?.data?.slice(0, 20);

	const tableColumn: ColumnDef<TableProps>[] = [
		{
			accessorKey: "id",
			size: 10,

			cell: ({ getValue }) => {
				return (
					<HStack w="170px" overflowX="scroll">
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "coverImage",
			size: 10,
			cell: ({ getValue }) => {
				return (
					<HStack overflowX="scroll">
						<Img
							mx="auto"
							src={getValue() as unknown as string}
							height="40px"
							width="40px"
							alt={getValue() as unknown as string}
						/>
					</HStack>
				);
			},
		},
		{
			accessorKey: "topic",
			size: 10,

			cell: ({ getValue }) => {
				return (
					<HStack w="300px">
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},
		{
			accessorKey: "viewed",
			size: 10,
			meta: {
				THstyle: {
					textAlign: "center",
				},
				TDstyle: {
					textAlign: "center",
				},
			},
			cell: ({ getValue }) => {
				return (
					<HStack>
						<Text>{getValue() as unknown as string}</Text>
					</HStack>
				);
			},
		},

		{
			accessorKey: "Actions",
			size: 10,
			meta: {
				THstyle: {
					textAlign: "center",
				},
				TDstyle: {
					textAlign: "center",
				},
			},
			cell: () => {
				return (
					<Flex>
						<Img
							cursor="pointer"
							py="1rem"
							src="/assets/icons/view-icon.svg"
							height="53px"
							width="53px"
							alt="View Icon"
						/>
						<Img
							cursor="pointer"
							py="1rem"
							src="/assets/icons/edit-icon.svg"
							height="53px"
							width="53px"
							alt="Edit Icon"
						/>
						<Img
							cursor="pointer"
							py="1rem"
							src="/assets/icons/delete-icon.svg"
							height="53px"
							width="53px"
							alt="Delete Icon"
						/>
					</Flex>
				);
			},
		},
	];

	const tableData = useMemo(() => {
		return (
			slicedLessonData &&
			slicedLessonData?.map((item: LessonProps) => ({
				id: item._id,
				coverImage: item.subjectId?.defaultImage,
				topic: item.title,
				viewed: item.views,
			}))
		);
	}, [slicedLessonData]);

	return (
		<DashboardLayout>
			<Box>
				<CustomTableLayout
					{...{
						columns: tableColumn,
						data: tableData ?? [],
						subjectData,
						selectedSubjectId,
						setSelectedSubjectId,
					}}
				/>
			</Box>
		</DashboardLayout>
	);
};

export default Notes;
