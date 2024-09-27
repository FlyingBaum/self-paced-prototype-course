import { TurtleEditorView } from './TurtleEditorView';
import { TheorySnippet } from '../@types';

interface ExplanationStepProps {
	theory: TheorySnippet[];
}

export const ExplanationStep: React.FC<ExplanationStepProps> = ({
	theory,
}): JSX.Element => {
	return (
		<>
			{theory.map((theoryPart, index) => (
				<div key={index} className="mb-5 w-full">
					{theoryPart.explanation && (
						<div className="mb-5 rounded-lg border-2 border-primary-200 bg-primary-900 px-10 py-6">
							<h2 className="mb-3 text-2xl font-bold text-primary-100">
								Erklärung
							</h2>
							<p
								className="text-justify text-lg"
								dangerouslySetInnerHTML={{
									__html: theoryPart.explanation.replace(/\n/g, '<br />'),
								}}
							/>
						</div>
					)}
					{theoryPart.exampleCode && (
						<div className="rounded-lg border-2 border-primary-200 bg-primary-900 px-10 py-6">
							<h2 className="mb-3 text-2xl font-bold text-primary-100">
								Beispiel
							</h2>
							<TurtleEditorView initialCode={theoryPart.exampleCode.trim()} />
						</div>
					)}
				</div>
			))}
		</>
	);
};
