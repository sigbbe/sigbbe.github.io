import React, { FunctionComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import MyButton from '../components/my-button/MyButton';
import AnimationHeadingOne from '../components/my-heading/AnimationHeadingOne';
import GitHubIcon from '@material-ui/icons/GitHub';
import Laettis from '../components/laettis/Laettis';
import './App.sass';

const test = 'test';
for (let i = 1; i <= test.length; i++) {
    setTimeout(() => console.log(test.substr(0, i)), 1000 + i * 200);
}

const App: FunctionComponent = () => {
    return (
        <>
            <div className={'Flex-center Flex-column Full-size'}>
                <Laettis />
                <AnimationHeadingOne title={'Sigbjørn Berdal\'s website'} typingSpeed={3}/>
                <MyButton text={'Github'} Icon={ GitHubIcon }/>
            </div>
        </>
    );
};
export default hot(App);
