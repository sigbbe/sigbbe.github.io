import React, { FunctionComponent } from "react";
import AnimationHeadingOne from '../components/my-heading/AnimationHeadingOne';
import './App.sass';

const App: FunctionComponent = () => {
    return (
        <div className={'Flex-center Flex-column Full-size'}>
            <AnimationHeadingOne>
                <h1>A</h1>
                <h2>BB</h2>
                <h3>CCC</h3>
            </AnimationHeadingOne>
        </div>
    );
};
export default App;
