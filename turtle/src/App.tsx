import { useEffect, useState } from 'react';

import { Button } from '@codary/ui';
import { ProgressBar } from '@codary/ui';

import { ExerciseStep } from '../components/ExerciseStep';
import { ExplanationStep } from '../components/ExplanationStep';
import { QuizStep } from '../components/QuizStep';
import { sections } from '../CourseDetails';

export const TurtleApp = (): JSX.Element => {
	const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
	const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);

	const totalSections = sections.length;

	// Calculate total steps based on available parts per section
	const totalSlidesPerSection = sections.reduce(
		(acc, section) =>
			acc +
			[!!section.theory, !!section.exercises, !!section.quiz].filter(Boolean)
				.length,
		0
	);

	const handleProgressUpdate = (sectionIndex: number, slideIndex: number) => {
		const completedSlides = sections
			.slice(0, sectionIndex)
			.reduce(
				(acc, section) =>
					acc +
					[!!section.theory, !!section.exercises, !!section.quiz].filter(
						Boolean
					).length,
				0
			);
		const newProgress =
			((completedSlides + slideIndex) / totalSlidesPerSection) * 100;
		setProgress(newProgress);
	};

	const nextSlide = () => {
		let newSlideIndex = currentSlideIndex + 1;
		let newSectionIndex = currentSectionIndex;

		while (newSectionIndex < totalSections) {
			const currentSection = sections[newSectionIndex];
			const parts = [
				currentSection.theory,
				currentSection.exercises,
				currentSection.quiz,
			].filter(Boolean);
			if (newSlideIndex < parts.length) {
				setCurrentSlideIndex(newSlideIndex);
				setCurrentSectionIndex(newSectionIndex);
				handleProgressUpdate(newSectionIndex, newSlideIndex);
				return;
			}
			newSlideIndex = 0;
			newSectionIndex++;
		}
	};

	const prevSlide = () => {
		let newSlideIndex = currentSlideIndex - 1;
		let newSectionIndex = currentSectionIndex;

		while (newSectionIndex >= 0) {
			const currentSection = sections[newSectionIndex];
			const parts = [
				currentSection.theory,
				currentSection.exercises,
				currentSection.quiz,
			].filter(Boolean);
			if (newSlideIndex >= 0) {
				setCurrentSlideIndex(newSlideIndex);
				setCurrentSectionIndex(newSectionIndex);
				handleProgressUpdate(newSectionIndex, newSlideIndex);
				return;
			}
			newSectionIndex--;
			if (newSectionIndex >= 0) {
				newSlideIndex =
					[
						sections[newSectionIndex].theory,
						sections[newSectionIndex].exercises,
						sections[newSectionIndex].quiz,
					].filter(Boolean).length - 1;
			}
		}
	};

	const renderCurrentComponent = () => {
		const currentSection = sections[currentSectionIndex];
		const parts = [
			currentSection.theory,
			currentSection.exercises,
			currentSection.quiz,
		].filter(Boolean);
		const part = parts[currentSlideIndex];

		if (part === currentSection.theory) {
			return <ExplanationStep theory={currentSection.theory} />;
		}
		if (part === currentSection.exercises && currentSection.exercises) {
			return <ExerciseStep exercises={currentSection.exercises} />;
		}
		if (part === currentSection.quiz && currentSection.quiz) {
			return <QuizStep quizzes={currentSection.quiz} />;
		}
		return null;
	};

	useEffect(() => {
		// Scroll to top when section or slide changes.
		window.scrollTo(0, 0);
	}, [currentSectionIndex, currentSlideIndex]);

	return (
		<div className="bg-primary-700 px-20 py-12 text-white">
			<h1 className="mb-8 text-3xl font-bold uppercase">
				{sections[currentSectionIndex].title}
			</h1>
			<ProgressBar percentage={progress} />
			<div className="mt-8">{renderCurrentComponent()}</div>
			<div className="mt-5 flex justify-between">
				<Button
					onClick={prevSlide}
					disabled={currentSectionIndex === 0 && currentSlideIndex === 0}
				>
					Zurück
				</Button>
				<Button
					onClick={nextSlide}
					disabled={
						currentSectionIndex === totalSections - 1 &&
						currentSlideIndex ===
							[
								sections[totalSections - 1].theory,
								sections[totalSections - 1].exercises,
								sections[totalSections - 1].quiz,
							].filter(Boolean).length -
								1
					}
				>
					Weiter
				</Button>
			</div>
		</div>
	);
};
