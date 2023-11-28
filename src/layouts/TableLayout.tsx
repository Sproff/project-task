import { SubjectInfoProps } from "@/types/subject";
import {
	Box,
	chakra,
	HStack,
	Table as CTable,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	Center,
	Select,
	Flex,
	Heading,
} from "@chakra-ui/react";
import {
	flexRender,
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
} from "@tanstack/react-table";
import React, { useMemo } from "react";

const Table = chakra(CTable);
const TableHead = chakra(Thead);
const TableBody = chakra(Tbody);
const TableRow = chakra(Tr);
const TableH = chakra(Th);
const TableD = chakra(Td);

const CustomTableLayout = (props: any) => {
	const data = useMemo(() => props.data, [props.data]);
	const columns = useMemo(() => props.columns, [props.columns]);

	const { getHeaderGroups, getRowModel, getPageCount, getState, setPageSize } =
		useReactTable({
			columns,
			data,
			getCoreRowModel: getCoreRowModel(),
			getFilteredRowModel: getFilteredRowModel(),
			getPaginationRowModel: getPaginationRowModel(),
		});

	return (
		<Box>
			{props.subjectData?.data?.length ? (
				<Box>
					<Flex>
						<Box pos="fixed" top="12.82rem" overflowY="scroll" h="100%">
							<Heading
								color="brand.dark200"
								fontFamily="Andika"
								fontSize="1.5rem"
								borderBottom="4px solid"
								borderRight="1px solid"
								borderColor="brand.dark200"
								bg="brand.white100"
								p="1.5rem 2rem"
								pos="fixed"
								w="100%"
							>
								Subjects
							</Heading>
							<Box mt="5rem">
								{props?.subjectData?.data?.map((subject: SubjectInfoProps) => (
									<Text
										key={subject?._id}
										color="brand.dark200"
										fontFamily="Andika"
										fontSize="1.5rem"
										textTransform="capitalize"
										fontWeight={
											props?.selectedSubjectId === subject?._id ? "700" : "400"
										}
										borderRight="1px solid"
										borderColor="brand.dark200"
										bg={
											props?.selectedSubjectId === subject?._id
												? "brand.green100"
												: "brand.gray400"
										}
										onClick={() => props?.setSelectedSubjectId(subject?._id)}
										cursor="pointer"
										p="2rem 3.05rem 2rem 2rem"
										_hover={{
											bg: "brand.green100",
											overflow: "hidden",
										}}
									>
										{subject?.name}
									</Text>
								))}
							</Box>
						</Box>

						<Box minH="40rem" overflowX="scroll" w="81.8%" ml="auto">
							<Table
								bg="inherit"
								maxW="full"
								rounded="1rem"
								fontFamily="Andika"
							>
								<TableHead
									w="100%"
									pos="fixed"
									top="12.7rem"
									color="brand.dark200"
									borderBottom="4px solid"
									borderColor="brand.dark200"
									bg="brand.white100"
								>
									{getHeaderGroups().map((headerGroup) => (
										<TableRow key={headerGroup.id}>
											{headerGroup.headers.map((Hcolumn) => (
												<TableH
													key={Hcolumn.id}
													w={`${Hcolumn.getSize()}rem` ?? "auto"}
													p="2.3rem 2rem 1.5rem"
													color="brand.dark200"
													fontFamily="Andika"
													fontSize="1.5rem"
													fontWeight="700"
													textTransform="capitalize"
													{...(
														Hcolumn.column.columnDef.meta as Record<string, any>
													)?.THstyle}
												>
													{Hcolumn.isPlaceholder
														? null
														: flexRender(
																Hcolumn.column.columnDef.header,
																Hcolumn.getContext()
														  )}
												</TableH>
											))}
										</TableRow>
									))}
								</TableHead>
								<Box mt="3rem">
									<TableBody fontSize="1.2rem">
										{getRowModel().rows.map((row) => (
											<TableRow
												key={row.id}
												_hover={{
													bg: "brand.gray400",
													cursor: "pointer",
												}}
											>
												{row.getVisibleCells().map((cell) => {
													return (
														<TableD
															mt="25rem"
															key={cell.id}
															w={`${cell.column.getSize()}rem` ?? "auto"}
															lineHeight="1.8rem"
															fontWeight="400"
															fontSize="1.5rem"
															color="brand.dark200"
															fontFamily="Andika"
															borderBottom="1px solid"
															borderColor="brand.gray700"
															{...(
																cell.column.columnDef.meta as Record<
																	string,
																	any
																>
															)?.TDstyle}
														>
															{flexRender(
																cell.column.columnDef.cell,
																cell.getContext()
															)}
														</TableD>
													);
												})}
											</TableRow>
										))}
									</TableBody>
								</Box>
							</Table>
						</Box>
					</Flex>

					<HStack
						mx="auto"
						mt="5rem"
						p="2rem"
						spacing="1rem"
						justify="space-between"
						w="max-content"
					>
						<HStack fontSize="1.6rem" color="brand.dark200" fontFamily="Andika">
							<Text>
								Showing page {getState().pagination.pageIndex + 1} of{" "}
								{getPageCount()} result(s)
							</Text>

							<Box>
								<Select
									fontSize="1rem"
									color="brand.dark200"
									fontFamily="Andika"
									border="1px solid"
									borderRadius=".5rem"
									px=".5rem"
									cursor="pointer"
									value={getState().pagination.pageSize}
									onChange={(e) => {
										setPageSize(Number(e.target.value));
									}}
									_focusVisible={{ border: "none", borderColor: "transparent" }}
								>
									{[50, 100, 200, 300].map((pageSize) => (
										<option key={pageSize} value={pageSize}>
											Show {pageSize}
										</option>
									))}
								</Select>
							</Box>
						</HStack>
					</HStack>
				</Box>
			) : (
				<Center>
					<Text>No data available, Check back later!</Text>
				</Center>
			)}
		</Box>
	);
};

export { CustomTableLayout };
