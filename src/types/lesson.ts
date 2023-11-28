export type LessonProps = {
	classId: {
		_id: string;
		alias: string;
		name: string;
	};
	subjectId: {
		_id: string;
		name: string;
		defaultImage: string;
		introText?: string;
	};
	termId: {
		name: string;
	};
	content: string;
	title: string;
	views: number;
	_id: string;
};
