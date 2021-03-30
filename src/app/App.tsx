import React, { FunctionComponent } from "react";
import AnimationHeadingOne from '../components/my-heading/AnimationHeadingOne';
import './App.sass';

const App: FunctionComponent = () => {
    return (
        <div className={'Flex-center Flex-column Full-size'}>
            <AnimationHeadingOne title={'Sigbjørn Berdal'}/>
        </div>
    );
};
export default App;
