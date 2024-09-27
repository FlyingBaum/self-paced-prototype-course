export type QuizType = 'picture' | 'code' | 'text';

export interface QuizSnippet {
	question: string;
	questionCode?: string;
	answers: string[];
	correctAnswers: number[];
	type: QuizType;
}
