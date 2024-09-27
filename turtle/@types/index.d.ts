export * from './exercise';
export * from './progression';
export * from './quiz';
export * from './section';
export * from './theory';

export interface TurtleCourse {
	id?: string;
	title: string;
	internalTitle: string;
	structure: TurtleLessonItem[];
}

export interface TurtleLessonItem {
	sectionId: string;
	title: string;
}
