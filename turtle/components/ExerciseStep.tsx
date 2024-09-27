import { TurtleEditorView } from './TurtleEditorView';
import { ExerciseSnippet } from '../@types';

interface ExerciseStepProps {
	exercises: ExerciseSnippet[];
}

export const ExerciseStep: React.FC<ExerciseStepProps> = ({
	exercises,
}): JSX.Element => {
	return (
		<>
			{exercises.map((exercise, index) => (
				<div key={index}>
					<div className="my-5 w-full rounded-lg border-2 border-primary-200 bg-primary-900 px-10 py-6">
						<h2 className="mb-3 text-2xl font-bold text-primary-100">
							Aufgabe
						</h2>
						<p
							className="text-justify text-lg"
							dangerouslySetInnerHTML={{
								__html: exercise.task.replace(/\n/g, '<br />'),
							}}
						/>
					</div>
					<div className="w-full">
						<div className="w-full rounded-lg border-2 border-primary-200 bg-primary-900 px-10 py-6">
							<TurtleEditorView initialCode={exercise.code} />
						</div>
					</div>
				</div>
			))}
		</>
	);
};
