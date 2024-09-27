import React, { useEffect, useState } from 'react';

import {
	Circle,
	Square,
	Triangle,
	Rectangle,
	Parallelogram,
	Pentagon,
	Pentagram,
	Line,
} from '@codary/assets';
import clsx from 'clsx';

import { QuizSnippet, QuizType } from '../@types';

const shapeValueProps: JSX.IntrinsicElements['img'] &
	JSX.IntrinsicElements['svg'] = {
	'aria-hidden': true,
	className: 'rounded-lg h-48 w-48',
};

const shapeMap: Record<string, JSX.Element> = {
	circle: <Circle {...shapeValueProps} />,
	square: <Square {...shapeValueProps} />,
	triangle: <Triangle {...shapeValueProps} />,
	rectangle: <Rectangle {...shapeValueProps} />,
	parallelogram: <Parallelogram {...shapeValueProps} />,
	pentagon: <Pentagon {...shapeValueProps} />,
	pentagram: <Pentagram {...shapeValueProps} />,
	line: <Line {...shapeValueProps} />,
};

interface QuizStepProps {
	quizzes: QuizSnippet[];
}

/**
 * This component can be used to visualize a quiz step with multiple questions and answers. Three types of quizzes are supported:
 * - `text`: a question with text answers.
 * - `picture`: a question with picture answers.
 * - `code`: a question with code answers.
 */
export const QuizStep: React.FC<QuizStepProps> = ({ quizzes }): JSX.Element => {
	const [selectedOptions, setSelectedOptions] = useState<{
		[key: number]: boolean;
	}>({});
	const [feedback, setFeedback] = useState<{ [key: number]: string }>({});

	/**
	 * Handles the click on a correct or incorrect option in the quiz.
	 * @param questionIndex Index of the question in the quiz.
	 * @param isCorrect Whether the selected option is correct.
	 */
	const handleOptionClick = (questionIndex: number, isCorrect: boolean) => {
		setSelectedOptions((prev) => ({ ...prev, [questionIndex]: isCorrect }));
		setFeedback((prev) => ({
			...prev,
			[questionIndex]: isCorrect
				? 'Korrekt, gut gemacht! Weiter geht’s!'
				: 'Nicht richtig, aber kopiere dir gerne den Code und probiere ihn mit Toby aus!',
		}));
	};

	return (
		<>
			{quizzes.map((quiz, qIndex) => (
				<div
					key={qIndex}
					className="my-5 w-full rounded-lg border-2 border-primary-200 bg-primary-900 px-10 py-6"
				>
					<h2 className="mb-3 text-2xl font-bold text-primary-100">Quiz</h2>
					<p
						className="text-justify text-lg"
						dangerouslySetInnerHTML={{
							__html: quiz.question.replace(/\n/g, '<br />'),
						}}
					/>
					{quiz.questionCode && (
						<pre className="rounded-lg bg-primary-800 p-3 text-base text-yellow-100">
							<code>{quiz.questionCode}</code>
						</pre>
					)}
					<div className="mt-8 flex w-full flex-row justify-center space-x-4 px-10 py-6">
						{quiz.answers.map((answer, i) => (
							<QuizOption
								key={i}
								type={quiz.type}
								option={answer}
								correct={quiz.correctAnswers.includes(i)}
								onClick={() =>
									handleOptionClick(qIndex, quiz.correctAnswers.includes(i))
								}
								selected={selectedOptions[qIndex] !== undefined}
							/>
						))}
					</div>
					{feedback[qIndex] && (
						<div className={`mt-4 text-center text-lg`}>{feedback[qIndex]}</div>
					)}
				</div>
			))}
		</>
	);
};

interface QuizOptionProps {
	type: QuizType;
	option: string;
	correct: boolean;
	onClick: () => void;
	selected: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({
	type,
	option,
	correct,
	onClick,
	selected,
}): JSX.Element => {
	const [content, setContent] = useState<JSX.Element | null>(null);

	useEffect(() => {
		if (type === 'picture') {
			setContent(shapeMap[option]);
		} else if (type === 'code') {
			setContent(
				<pre className="rounded-lg p-2 text-yellow-100">
					<code>{option}</code>
				</pre>
			);
		} else {
			setContent(<p className="text-center text-lg">{option}</p>);
		}
	}, []);

	const classNames = clsx(
		'flex flex-col items-center space-y-4 p-2 bg-primary-800 border-4 rounded-lg',
		{
			'border-green-500': selected && correct,
			'border-error': selected && !correct,
			'border-primary-200 transition transform hover:scale-105': !selected,
			'cursor-pointer hover:bg-primary-700 transition transform hover:scale-105':
				!selected,
		}
	);

	return (
		<>
			{/* If a button has been selected then do not use a button so code can be copied by users. */}
			{selected ? (
				<div className={classNames}>{content}</div>
			) : (
				<button className={classNames} onClick={onClick}>
					{content}
				</button>
			)}
		</>
	);
};
