import React, { FC, useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { getAllForwardSeq } from '../../utils/sandbox/SandBox';
import Caret from './caret/Caret';
import './AnimationHeadingOne.sass';

type TypingSpeeds = 1 | 2 | 3;

export interface AnimationHeadingOneProps {
    title: string;
    typingSpeed: TypingSpeeds;
}

const AnimationHeadingOne: FC<AnimationHeadingOneProps> = ({title, typingSpeed}: AnimationHeadingOneProps): JSX.Element => {
    const [headingState, setHeadingState] = useState('');
    const [caretState, updateCaretState] = useState(false);

    const isTyping = () => {
        updateCaretState(true);
    };

    const isNotTyping = () => {
        updateCaretState(false);
    };

    let duration = 0;
    if (typingSpeed === 1) {
        duration = 1000;
    } else if (typingSpeed === 2) {
        duration = 200;
    } else {
        duration = 75;
    }
    const delay = 3000;

    const updateHeadingState = (newState: string) => {
        setHeadingState(newState);
    };

    const writeMessage = (msg: string) => {
        const strings: string[] = getAllForwardSeq(msg);
        let index = 0;
        const interval = setInterval(() => {
            isTyping();
            if (index > strings.length || strings[index] === undefined) {
                clearInterval(interval);
                isNotTyping();
                return;
            }
            const withNextChar = strings[index];
            updateHeadingState(withNextChar);
            index++;
        }, duration);
    };

    const clearMessage = () => {
        isTyping();
        setTimeout(() => {
            let textToDelete: string | null | undefined = document.getElementById('Animation-heading')?.children[0].textContent;
            if (textToDelete === null || textToDelete === undefined ) {
                return;
            }
            textToDelete = textToDelete?.replace('|', '');
            const interval = setInterval(() => {
                isTyping();
                if (textToDelete === null || textToDelete === undefined) {
                    return;
                }
                textToDelete = textToDelete.substring(0, textToDelete.length - 1);
                const len = textToDelete.length;
                updateHeadingState(textToDelete);
                if (len < 1) {
                    clearInterval(interval);
                    isNotTyping();
                    return;
                }
            }, duration);
        }, duration * title.length + delay);
    };

    useEffect(() => {
        setTimeout(() => {
            writeMessage(title);
            clearMessage();
        }, 3000);
        setTimeout(() => {
            writeMessage('Comming soon!');
        }, 12000);
    }, []);

    return (
        <h1
            id={'Animation-heading'}
            className={'Non-selectable'}
        >
            <div className={'Animation-text'}>{headingState}<Caret isTyping={caretState}/></div>
        </h1>
    );
};

export default AnimationHeadingOne;
