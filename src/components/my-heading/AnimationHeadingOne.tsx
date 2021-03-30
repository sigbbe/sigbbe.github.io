import React, { useState, useEffect } from 'react';
import { getAllForwardSeq } from '../../utils/sandbox/SandBox';
import './AnimationHeadingOne.sass';
import {string} from "prop-types";

const Caret = () =><p id={'Caret'}>{'|'}</p>;

export interface AnimationHeadingOneProps {
    title: string;
}

const AnimationHeadingOne = ({title}: AnimationHeadingOneProps) => {
    const [headingState, setHeadingState] = useState('');

    const updateHeadingState = (newState: string) => {
        setHeadingState(newState);
    }
    const duration = 75;
    const writeMessage = (msg: string) => {
        const strings: string[] = getAllForwardSeq(msg);
        let index = 0;
        const interval = setInterval(() => {
            if (index > strings.length) {
                clearInterval(interval);
            }
            console.log(strings.length + ", " + index)
            updateHeadingState(strings[index]);
            index++;
        }, duration);
    }

    const clearMessage = () => {
        setTimeout(() => {
            console.log("------");
            const interval = setInterval(() => {
                const deletedSingleChar = headingState.substr(0, headingState.length - 1);
                console.log(deletedSingleChar);
                if (headingState.length > 0) {
                    clearInterval(interval);
                }
                // console.log("headingState.length: " + headingState.length);
                // console.log("deletedSingleChar: " + deletedSingleChar);
                updateHeadingState(deletedSingleChar);
            }, duration);
        }, title.length * duration + 1000);
    }

    useEffect(() => {
        writeMessage(title);
        clearMessage();
    }, []);

    return (
        <h1
            id={'Animation-heading'}
            className={'Non-selectable'}
        >
            <div>{headingState}<Caret /></div>
        </h1>
    );
}

export default AnimationHeadingOne;
