import React, { FC } from 'react';
import './Caret.sass';

export interface CaretInterface {
    isTyping: boolean;
}

const Caret: FC<CaretInterface> = ({ isTyping }: CaretInterface) => {
    return (
        <p id={'Caret'} className={isTyping ? 'Not-typing' : undefined}>{'|'}</p>
    );
};

export default Caret;
