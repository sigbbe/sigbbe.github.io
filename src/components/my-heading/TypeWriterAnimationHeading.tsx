import { Box, Heading } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
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
	children: React.ReactElement<TypeWriterAnimationContentPropsI, typeof TypeWriterAnimationContent>[];
	typingSpeed: TypingSpeeds;
	delay?: number;
}

const TypeWriterAnimationHeading: FC<TypeWriterAnimationHeadingPropsI> = ({ children, typingSpeed, delay = 3000 }: TypeWriterAnimationHeadingPropsI): JSX.Element => {
	const [currentMsg, _setCurrentMsg] = useState(0);
	const [headingState, setHeadingState] = useState('');
	const [caretState, updateCaretState] = useState(false);
	const NOW = new Date().getTime();
	const now = () => new Date().getTime();

	const setCurrentMsgIndex = (index: number) => {
		// console.log(`currentMsgIndex=${index}`);
		_setCurrentMsg(index);
	};

	const setIsTyping = () => {
		updateCaretState(true);
	};

	const setIsNotTyping = () => {
		updateCaretState(false);
	};

	const timeToWriteMsg: (msg: string, speed: TypingSpeeds, delay: number) => number = (msg, speed, delay) => getDuration(speed) * msg.length + delay;
	const timeToDeleteMsg = (msg: string, speed: TypingSpeeds, delay: number) => timeToWriteMsg(msg, speed, delay);

	const updateHeadingState = (newState: string) => {
		setHeadingState(newState);
	};

	const writeMessage = (msg: string, msgIndex: number, whenToWrite: number = now(), typingSpeed: TypingSpeeds = 1) => {
		const strings: string[] = getAllForwardSeq(msg);
		const duration = getDuration(typingSpeed);
		let index = 0;
		const tNow = now();
		const tDiff = tNow > whenToWrite ? 0 : whenToWrite - tNow;
		setTimeout(() => {
			const interval = setInterval(() => {
				setCurrentMsgIndex(msgIndex);
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
		}, tDiff);
	};

	const clearMessage = (msg: string, whenToRemove: number) => {
		setIsTyping();
		const tNow = now();
		const tDiff = tNow > whenToRemove ? 0 : whenToRemove - tNow;
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
			}, getDuration(typingSpeed));
		}, tDiff);
	};

	useEffect(() => {
		let time = 0;
		console.log(children.slice(0, children.length - 1).map(t => t.props.children));
		children.slice(0, children.length - 1).forEach((el, i) => {
			const msg = el.props.children;
			const startTime = now() + delay;
			const endTime = startTime + delay;
			// console.log(`startTime=${new Date(startTime)}`);
			// console.log(`endTime=${new Date(endTime)}`);
			writeMessage(msg, i, startTime, typingSpeed);
			clearMessage(msg, endTime);
			time = endTime;
		});
		const msg = children[children.length - 1].props.children;
		const endTime = time + delay;
		writeMessage(msg, children.length - 1, endTime, typingSpeed);
	}, []);

	return (
		<Heading id={ 'Animation-heading' } className={ 'Non-selectable' }>
			{ React.cloneElement(children[currentMsg], { isTyping: caretState, children: headingState }) }
		</Heading>
	);
};

interface TypeWriterAnimationContentPropsI {
	children: string;
	isTyping?: boolean;
}

const TypeWriterAnimationContent: FC<TypeWriterAnimationContentPropsI> = (props) => {
	const isTyping = props.isTyping !== null && props.isTyping == true;
	return <Box className={ 'Animation-text' }>{ props.children }<Caret isTyping={ isTyping } /></Box>;
};

export { TypeWriterAnimationHeading, TypeWriterAnimationContent };
