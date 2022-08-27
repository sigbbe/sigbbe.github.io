import { Box, Heading } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { getAllForwardSeq } from '../../utils/sandbox/SandBox';
import Caret from './caret/Caret';
import './TypeWriterAnimationHeading.sass';

type TypingSpeeds = 1 | 2 | 3;

function getDuration(speed: TypingSpeeds): number {
	switch (speed) {
		case 1:
			return 1000;
		case 2:
			return 200;
		default:
			return 75;
	}
}

export interface TypeWriterAnimationHeadingPropsI {
	message: string;
	title?: string;
	typingSpeed: TypingSpeeds;
	delay?: number;
}

const TypeWriterAnimationHeading: FC<TypeWriterAnimationHeadingPropsI> = ({ message, title, typingSpeed, delay = 3000 }: TypeWriterAnimationHeadingPropsI): JSX.Element => {
	const [headingState, setHeadingState] = useState('');
	const [caretState, updateCaretState] = useState(false);

	const setIsTyping = () => {
		updateCaretState(true);
	};

	const setIsNotTyping = () => {
		updateCaretState(false);
	};

	const duration = getDuration(typingSpeed);

	const updateHeadingState = (newState: string) => {
		setHeadingState(newState);
	};

	const writeMessage = (msg: string) => {
		const strings: string[] = getAllForwardSeq(msg);
		let index = 0;
		const interval = setInterval(() => {
			setIsTyping();
			if (index > strings.length || strings[index] === undefined) {
				clearInterval(interval);
				setIsNotTyping();
				return;
			}
			const withNextChar = strings[index];
			updateHeadingState(withNextChar);
			index++;
		}, duration);
	};

	const clearMessage = (msg: string) => {
		setIsTyping();
		setTimeout(() => {
			let textToDelete: string | null | undefined = document.getElementById('Animation-heading')?.children[0].textContent;
			if (textToDelete === null || textToDelete === undefined) {
				return;
			}
			textToDelete = textToDelete?.replace('|', '');
			const interval = setInterval(() => {
				setIsTyping();
				if (textToDelete === null || textToDelete === undefined) {
					return;
				}
				textToDelete = textToDelete.substring(0, textToDelete.length - 1);
				const len = textToDelete.length;
				updateHeadingState(textToDelete);
				if (len < 1) {
					clearInterval(interval);
					setIsNotTyping();
					return;
				}
			}, duration);
		}, duration * msg.length + delay);
	};

	useEffect(() => {
		setTimeout(() => {
			writeMessage(message);
			clearMessage(message);
		}, 3000);
		if (title) {
			setTimeout(() => {
				writeMessage(title);
			}, 12000);
		}
	}, []);

	return (
		<Heading
			id={ 'Animation-heading' }
			className={ 'Non-selectable' }
		>
			<Box className={ 'Animation-text' }>{ headingState }<Caret isTyping={ caretState } /></Box>
		</Heading>
	);
};

export default TypeWriterAnimationHeading;
