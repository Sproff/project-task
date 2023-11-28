export type ClassIdProps = {
	_id: string;
	name?: string;
	label?: string;
};

export type TStoreState = {
	/* eslint no-unused-vars : "off" */
	classId: ClassIdProps;
	subjectId: string;
	setClassId: (classId: ClassIdProps) => void;
	setSubjectId: (subjectId: string) => void;
};
