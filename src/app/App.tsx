import React, { FunctionComponent } from "react";
import AnimationHeadingOne from '../components/my-heading/AnimationHeadingOne';
// import Caret from '../components/my-heading/caret/Caret';
import './App.sass';

const App: FunctionComponent = () => {
    return (
        <div className={'Flex-center Flex-column Full-size'}>
            <AnimationHeadingOne title={'Sigbjørn Berdal'} typingSpeed={3}/>
            {/*<Caret isTyping={true}/>*/}
        </div>
    );
};
export default App;
