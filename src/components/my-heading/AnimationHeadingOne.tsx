import React, {useState, useEffect } from 'react';
import { getAllForwardSeq } from '../../utils/sandbox/SandBox';
import Caret from './caret/Caret';
import './AnimationHeadingOne.sass';

type TypingSpeeds = 1 | 2 | 3;

export interface AnimationHeadingOneProps {
    title: string;
    typingSpeed: TypingSpeeds;
}

const AnimationHeadingOne = ({title, typingSpeed}: AnimationHeadingOneProps): JSX.Element => {
    const [headingState, setHeadingState] = useState('');
    const [caretState, updateCaretState] = useState(true);

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
        isTyping();
        const strings: string[] = getAllForwardSeq(msg);
        let index = 0;
        const interval = setInterval(() => {
            if (index > strings.length || strings[index] === undefined) {
                clearInterval(interval);
                return;
            }
            const withNextChar = strings[index];
            updateHeadingState(withNextChar);
            index++;
        }, duration);
        isNotTyping();
    };

    const clearMessage = () => {
        setTimeout(() => {
            let textToDelete: string | null | undefined = document.getElementById('Animation-heading')?.children[0].textContent;
            if (textToDelete === null || textToDelete === undefined ) {
                return;
            }
            textToDelete = textToDelete?.replace('|', '');
            const interval = setInterval(() => {
                if (textToDelete === null || textToDelete === undefined) {
                    return;
                }
                textToDelete = textToDelete.substring(0, textToDelete.length - 1);
                const len = textToDelete.length;
                updateHeadingState(textToDelete);
                if (len < 1) {
                    clearInterval(interval);
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
    }, []);

    return (
        <h1
            id={'Animation-heading'}
            className={'Non-selectable'}
        >
            <div>{headingState}<Caret isTyping={caretState}/></div>
        </h1>
    );
};

export default AnimationHeadingOne;
