import React, { FunctionComponent } from "react";
import AnimationHeadingOne from '../components/my-heading/AnimationHeadingOne';
import './App.sass';

const test = 'test';

for (let i = 1; i <= test.length; i++) {
    setTimeout(() => console.log(test.substr(0, i)), 1000 + i * 200);
}
console.log("sdfkjlsdfj");


const App: FunctionComponent = () => {
    return (
        <div className={'Flex-center Flex-column Full-size'}>
            <AnimationHeadingOne title={'Sigbjørn Berdal'} typingSpeed={3}/>
            {/*<Caret isTyping={true}/>*/}
        </div>
    );
};
export default App;
