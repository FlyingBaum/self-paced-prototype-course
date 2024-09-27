import { ExerciseSnippet } from './exercise';
import { QuizSnippet } from './quiz';
import { TheorySnippet } from './theory';

export interface TurtleSection {
	id: string;
	title: string;
	theory: TheorySnippet[];
	exercises?: ExerciseSnippet[];
	quiz?: QuizSnippet[];
}
